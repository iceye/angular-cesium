import { ChangeDetectionStrategy, Component, OnDestroy, ViewChild } from '@angular/core';
import { EditModes } from '../../models/edit-mode.enum';
import { AcNotification } from '../../../angular-cesium/models/ac-notification';
import { EditActions } from '../../models/edit-actions.enum';
import { AcLayerComponent } from '../../../angular-cesium/components/ac-layer/ac-layer.component';
import { CoordinateConverter } from '../../../angular-cesium/services/coordinate-converter/coordinate-converter.service';
import { MapEventsManagerService } from '../../../angular-cesium/services/map-events-mananger/map-events-manager';
import { Subject } from 'rxjs';
import { CameraService } from '../../../angular-cesium/services/camera/camera.service';
import { EditPoint } from '../../models/edit-point';
import { EllipsesManagerService } from '../../services/entity-editors/ellipses-editor/ellipses-manager.service';
import { EllipsesEditorService } from '../../services/entity-editors/ellipses-editor/ellipses-editor.service';
import { EllipseEditUpdate } from '../../models/ellipse-edit-update';
import { LabelProps } from '../../models/label-props';
import { EditableEllipse } from '../../models/editable-ellipse';

@Component({
  selector: 'ellipses-editor',
  templateUrl: './ellipses-editor.component.html',
  providers: [CoordinateConverter, EllipsesManagerService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EllipsesEditorComponent implements OnDestroy {
  private editLabelsRenderFn: (update: EllipseEditUpdate, labels: LabelProps[]) => LabelProps[];
  public Cesium = Cesium;
  public editPoints$ = new Subject<AcNotification>();
  public editEllipses$ = new Subject<AcNotification>();

  @ViewChild('editEllipsesLayer') private editEllipsesLayer: AcLayerComponent;
  @ViewChild('editPointsLayer') private editPointsLayer: AcLayerComponent;

  constructor(
    private ellipsesEditor: EllipsesEditorService,
    private coordinateConverter: CoordinateConverter,
    private mapEventsManager: MapEventsManagerService,
    private cameraService: CameraService,
    private ellipsesManager: EllipsesManagerService,
  ) {
    this.ellipsesEditor.init(this.mapEventsManager, this.coordinateConverter, this.cameraService, this.ellipsesManager);
    this.startListeningToEditorUpdates();
  }

  private startListeningToEditorUpdates() {
    this.ellipsesEditor.onUpdate().subscribe(update => {
      if (update.editMode === EditModes.CREATE || update.editMode === EditModes.CREATE_OR_EDIT) {
        this.handleCreateUpdates(update);
      } else if (update.editMode === EditModes.EDIT) {
        this.handleEditUpdates(update);
      }
    });
  }

  getLabelId(element: any, index: number): string {
    return index.toString();
  }

  renderEditLabels(ellipse: EditableEllipse, update: EllipseEditUpdate, labels?: LabelProps[]) {
    update.center = ellipse.getCenter();
    update.majorRadius = ellipse.getMajorRadius();
    update.minorRadius = ellipse.getMinorRadius();
    update.rotation = ellipse.getRotation();

    if (labels) {
      ellipse.labels = labels;
      this.editEllipsesLayer.update(ellipse, ellipse.getId());
      return;
    }

    if (!this.editLabelsRenderFn) {
      return;
    }

    ellipse.labels = this.editLabelsRenderFn(update, ellipse.labels);
    this.editEllipsesLayer.update(ellipse, ellipse.getId());
  }

  removeEditLabels(ellipse: EditableEllipse) {
    ellipse.labels = [];
    this.editEllipsesLayer.update(ellipse, ellipse.getId());
  }

  handleCreateUpdates(update: EllipseEditUpdate) {
    switch (update.editAction) {
      case EditActions.INIT: {
        this.ellipsesManager.createEditableEllipse(
          update.id,
          this.editEllipsesLayer,
          this.editPointsLayer,
          this.coordinateConverter,
          update.ellipseOptions,
        );
        break;
      }
      case EditActions.MOUSE_MOVE: {
        const ellipse = this.ellipsesManager.get(update.id);
        if (update.updatedPosition) {
          ellipse.movePoint(update.updatedPosition, ellipse.majorRadiusPoint);
          this.renderEditLabels(ellipse, update);
        }
        break;
      }
      case EditActions.ADD_POINT: {
        const ellipse = this.ellipsesManager.get(update.id);
        if (update.center) {
          ellipse.addPoint(update.center);
          this.renderEditLabels(ellipse, update);
        }
        break;
      }
      case EditActions.ADD_LAST_POINT: {
        const ellipse = this.ellipsesManager.get(update.id);
        if (update.updatedPosition) {
          ellipse.addLastPoint(update.updatedPosition);
          this.renderEditLabels(ellipse, update);
        }
        break;
      }
      case EditActions.DISPOSE: {
        const ellipse = this.ellipsesManager.get(update.id);
        this.removeEditLabels(ellipse);
        this.ellipsesManager.dispose(update.id);
        break;
      }
      case EditActions.SET_EDIT_LABELS_RENDER_CALLBACK: {
        const ellipse = this.ellipsesManager.get(update.id);
        this.editLabelsRenderFn = update.labelsRenderFn;
        this.renderEditLabels(ellipse, update);
        break;
      }
      case EditActions.UPDATE_EDIT_LABELS: {
        const ellipse = this.ellipsesManager.get(update.id);
        this.renderEditLabels(ellipse, update, update.updateLabels);
        break;
      }
      case EditActions.SET_MANUALLY: {
        const ellipse = this.ellipsesManager.get(update.id);
        this.renderEditLabels(ellipse, update, update.updateLabels);
        break;
      }
      default: {
        return;
      }
    }
  }

  handleEditUpdates(update: EllipseEditUpdate) {
    switch (update.editAction) {
      case EditActions.INIT: {
        const ellipse = this.ellipsesManager.createEditableEllipse(
          update.id,
          this.editEllipsesLayer,
          this.editPointsLayer,
          this.coordinateConverter,
          update.ellipseOptions,
        );
        ellipse.setManually(
          update.center,
          update.majorRadius,
          update.rotation,
          update.minorRadius,
          (update.ellipseOptions && update.ellipseOptions.pointProps) || undefined,
          (update.ellipseOptions && update.ellipseOptions.pointProps) || undefined,
          (update.ellipseOptions && update.ellipseOptions.ellipseProps) || undefined,
        );
        this.renderEditLabels(ellipse, update);
        break;
      }
      case EditActions.DRAG_POINT_FINISH:
      case EditActions.DRAG_POINT: {
        const ellipse = this.ellipsesManager.get(update.id);
        if (ellipse && ellipse.enableEdit) {
          ellipse.movePoint(update.endDragPosition, update.updatedPoint);
          this.renderEditLabels(ellipse, update);
        }
        break;
      }
      case EditActions.DRAG_SHAPE: {
        const ellipse = this.ellipsesManager.get(update.id);
        if (ellipse && ellipse.enableEdit) {
          ellipse.moveEllipse(update.startDragPosition, update.endDragPosition);
          this.renderEditLabels(ellipse, update);
        }
        break;
      }
      case EditActions.DRAG_SHAPE_FINISH: {
        const ellipse = this.ellipsesManager.get(update.id);
        if (ellipse && ellipse.enableEdit) {
          ellipse.endMoveEllipse();
          this.renderEditLabels(ellipse, update);
        }
        break;
      }
      case EditActions.ADD_POINT: {
        const ellipse = this.ellipsesManager.get(update.id);
        if (ellipse && ellipse.enableEdit) {
          ellipse.addPoint(update.updatedPosition);
          this.renderEditLabels(ellipse, update);
        }
        break;
      }
      case EditActions.DISABLE: {
        const ellipse = this.ellipsesManager.get(update.id);
        if (ellipse) {
          ellipse.enableEdit = false;
          this.renderEditLabels(ellipse, update);
        }
        break;
      }
      case EditActions.ENABLE: {
        const ellipse = this.ellipsesManager.get(update.id);
        if (ellipse) {
          ellipse.enableEdit = true;
          this.renderEditLabels(ellipse, update);
        }
        break;
      }
      default: {
        return;
      }
    }
  }

  ngOnDestroy(): void {
    this.ellipsesManager.clear();
  }

  getPointSize(point: EditPoint) {
    return point.isVirtualEditPoint() ? point.props.virtualPointPixelSize : point.props.pixelSize;
  }

  getPointShow(point: EditPoint) {
    return point.show && (point.isVirtualEditPoint() ? point.props.showVirtual : point.props.show);
  }
}