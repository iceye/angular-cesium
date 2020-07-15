import { Component, ViewChild } from '@angular/core';
import { AppSettingsService } from '../../services/app-settings-service/app-settings-service';
import {SceneMode, ViewerConfiguration} from '../../../../../angular-cesium/src/lib/angular-cesium';

@Component({
  selector: 'demo-map',
  templateUrl: './demo-map.component.html',
  providers: [ViewerConfiguration],
  styleUrls: ['./demo-map.component.css']
})
export class DemoMapComponent {
  sceneMode = SceneMode.SCENE3D;
  Cesium = Cesium;

  constructor(private viewerConf: ViewerConfiguration,
              public appSettingsService: AppSettingsService) {
    viewerConf.viewerOptions = {
      selectionIndicator: false,
      timeline: false,
      infoBox: false,
      fullscreenButton: false,
      baseLayerPicker: false,
      animation: false,
      shouldAnimate: false,
      homeButton: false,
      geocoder: true,
      navigationHelpButton: false,
      navigationInstructionsInitiallyVisible: false,
      mapMode2D: Cesium.MapMode2D.ROTATE,
    };

    viewerConf.viewerModifier = (viewer: any) => {
      viewer.screenSpaceEventHandler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);
    };

    this.appSettingsService.showTracksLayer = true;
  }
}
