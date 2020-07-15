'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">Angular Cesium</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="changelog.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CHANGELOG
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AngularCesiumModule.html" data-type="entity-link">AngularCesiumModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AngularCesiumModule-c8be76433d46f3679e05180f52ec55d6"' : 'data-target="#xs-components-links-module-AngularCesiumModule-c8be76433d46f3679e05180f52ec55d6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AngularCesiumModule-c8be76433d46f3679e05180f52ec55d6"' :
                                            'id="xs-components-links-module-AngularCesiumModule-c8be76433d46f3679e05180f52ec55d6"' }>
                                            <li class="link">
                                                <a href="components/AcArcComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AcArcComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AcArcDescComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AcArcDescComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AcArrayDescComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AcArrayDescComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AcBillboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AcBillboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AcBillboardDescComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AcBillboardDescComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AcBillboardPrimitiveDescComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AcBillboardPrimitiveDescComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AcBoxDescComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AcBoxDescComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AcCircleComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AcCircleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AcCircleDescComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AcCircleDescComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AcContextMenuWrapperComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AcContextMenuWrapperComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AcCorridorDescComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AcCorridorDescComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AcCylinderDescComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AcCylinderDescComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AcCzmlDescComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AcCzmlDescComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AcDefaultPlonterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AcDefaultPlonterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AcDynamicCircleDescComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AcDynamicCircleDescComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AcDynamicEllipseDescComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AcDynamicEllipseDescComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AcDynamicPolylineDescComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AcDynamicPolylineDescComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AcEllipseComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AcEllipseComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AcEllipseDescComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AcEllipseDescComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AcEllipsoidDescComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AcEllipsoidDescComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AcHtmlComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AcHtmlComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AcHtmlDescComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AcHtmlDescComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AcLabelComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AcLabelComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AcLabelDescComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AcLabelDescComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AcLabelPrimitiveDescComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AcLabelPrimitiveDescComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AcLayerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AcLayerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AcMapComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AcMapComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AcMapLayerProviderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AcMapLayerProviderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AcMapTerrainProviderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AcMapTerrainProviderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AcModelDescComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AcModelDescComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AcPointComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AcPointComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AcPointDescComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AcPointDescComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AcPointPrimitiveDescComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AcPointPrimitiveDescComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AcPolygonComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AcPolygonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AcPolygonDescComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AcPolygonDescComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AcPolylineComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AcPolylineComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AcPolylineDescComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AcPolylineDescComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AcPolylinePrimitiveDescComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AcPolylinePrimitiveDescComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AcPolylineVolumeDescComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AcPolylineVolumeDescComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AcPrimitivePolylineComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AcPrimitivePolylineComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AcRectangleComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AcRectangleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AcRectangleDescComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AcRectangleDescComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AcStaticCircleDescComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AcStaticCircleDescComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AcStaticEllipseDescComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AcStaticEllipseDescComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AcStaticPolygonDescComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AcStaticPolygonDescComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AcStaticPolylineDescComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AcStaticPolylineDescComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AcTileset3dComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AcTileset3dComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AcWallDescComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AcWallDescComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-AngularCesiumModule-c8be76433d46f3679e05180f52ec55d6"' : 'data-target="#xs-directives-links-module-AngularCesiumModule-c8be76433d46f3679e05180f52ec55d6"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-AngularCesiumModule-c8be76433d46f3679e05180f52ec55d6"' :
                                        'id="xs-directives-links-module-AngularCesiumModule-c8be76433d46f3679e05180f52ec55d6"' }>
                                        <li class="link">
                                            <a href="directives/AcHtmlContainerDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">AcHtmlContainerDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/AcHtmlDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">AcHtmlDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-AngularCesiumModule-c8be76433d46f3679e05180f52ec55d6"' : 'data-target="#xs-pipes-links-module-AngularCesiumModule-c8be76433d46f3679e05180f52ec55d6"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-AngularCesiumModule-c8be76433d46f3679e05180f52ec55d6"' :
                                            'id="xs-pipes-links-module-AngularCesiumModule-c8be76433d46f3679e05180f52ec55d6"' }>
                                            <li class="link">
                                                <a href="pipes/PixelOffsetPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PixelOffsetPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/RadiansToDegreesPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RadiansToDegreesPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AngularCesiumWidgetsModule.html" data-type="entity-link">AngularCesiumWidgetsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AngularCesiumWidgetsModule-aac4cd354ce1289ec9ee0468d575abbd"' : 'data-target="#xs-components-links-module-AngularCesiumWidgetsModule-aac4cd354ce1289ec9ee0468d575abbd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AngularCesiumWidgetsModule-aac4cd354ce1289ec9ee0468d575abbd"' :
                                            'id="xs-components-links-module-AngularCesiumWidgetsModule-aac4cd354ce1289ec9ee0468d575abbd"' }>
                                            <li class="link">
                                                <a href="components/AcToolbarButtonComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AcToolbarButtonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AcToolbarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AcToolbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CirclesEditorComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CirclesEditorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DragIconComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DragIconComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EllipsesEditorComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EllipsesEditorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HippodromeEditorComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HippodromeEditorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PointsEditorComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PointsEditorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PolygonsEditorComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PolygonsEditorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PolylinesEditorComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PolylinesEditorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RangeAndBearingComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RangeAndBearingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RectanglesEditorComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RectanglesEditorComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-AngularCesiumWidgetsModule-aac4cd354ce1289ec9ee0468d575abbd"' : 'data-target="#xs-directives-links-module-AngularCesiumWidgetsModule-aac4cd354ce1289ec9ee0468d575abbd"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-AngularCesiumWidgetsModule-aac4cd354ce1289ec9ee0468d575abbd"' :
                                        'id="xs-directives-links-module-AngularCesiumWidgetsModule-aac4cd354ce1289ec9ee0468d575abbd"' }>
                                        <li class="link">
                                            <a href="directives/DraggableToMapDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">DraggableToMapDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AngularCesiumWidgetsModule-aac4cd354ce1289ec9ee0468d575abbd"' : 'data-target="#xs-injectables-links-module-AngularCesiumWidgetsModule-aac4cd354ce1289ec9ee0468d575abbd"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AngularCesiumWidgetsModule-aac4cd354ce1289ec9ee0468d575abbd"' :
                                        'id="xs-injectables-links-module-AngularCesiumWidgetsModule-aac4cd354ce1289ec9ee0468d575abbd"' }>
                                        <li class="link">
                                            <a href="injectables/DraggableToMapService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>DraggableToMapService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ZoomToRectangleService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ZoomToRectangleService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UtilsModule.html" data-type="entity-link">UtilsModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AcEntity.html" data-type="entity-link">AcEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/AcHtmlContext.html" data-type="entity-link">AcHtmlContext</a>
                            </li>
                            <li class="link">
                                <a href="classes/BasicDrawerService.html" data-type="entity-link">BasicDrawerService</a>
                            </li>
                            <li class="link">
                                <a href="classes/CesiumDragDropHelper.html" data-type="entity-link">CesiumDragDropHelper</a>
                            </li>
                            <li class="link">
                                <a href="classes/CesiumExtender.html" data-type="entity-link">CesiumExtender</a>
                            </li>
                            <li class="link">
                                <a href="classes/CesiumLongPressObserver.html" data-type="entity-link">CesiumLongPressObserver</a>
                            </li>
                            <li class="link">
                                <a href="classes/CesiumPureEventObserver.html" data-type="entity-link">CesiumPureEventObserver</a>
                            </li>
                            <li class="link">
                                <a href="classes/CircleEditorObservable.html" data-type="entity-link">CircleEditorObservable</a>
                            </li>
                            <li class="link">
                                <a href="classes/DisposableObservable.html" data-type="entity-link">DisposableObservable</a>
                            </li>
                            <li class="link">
                                <a href="classes/EditableCircle.html" data-type="entity-link">EditableCircle</a>
                            </li>
                            <li class="link">
                                <a href="classes/EditableEllipse.html" data-type="entity-link">EditableEllipse</a>
                            </li>
                            <li class="link">
                                <a href="classes/EditableHippodrome.html" data-type="entity-link">EditableHippodrome</a>
                            </li>
                            <li class="link">
                                <a href="classes/EditablePoint.html" data-type="entity-link">EditablePoint</a>
                            </li>
                            <li class="link">
                                <a href="classes/EditablePolygon.html" data-type="entity-link">EditablePolygon</a>
                            </li>
                            <li class="link">
                                <a href="classes/EditablePolyline.html" data-type="entity-link">EditablePolyline</a>
                            </li>
                            <li class="link">
                                <a href="classes/EditableRectangle.html" data-type="entity-link">EditableRectangle</a>
                            </li>
                            <li class="link">
                                <a href="classes/EditArc.html" data-type="entity-link">EditArc</a>
                            </li>
                            <li class="link">
                                <a href="classes/EditorObservable.html" data-type="entity-link">EditorObservable</a>
                            </li>
                            <li class="link">
                                <a href="classes/EditPoint.html" data-type="entity-link">EditPoint</a>
                            </li>
                            <li class="link">
                                <a href="classes/EditPolyline.html" data-type="entity-link">EditPolyline</a>
                            </li>
                            <li class="link">
                                <a href="classes/EllipseEditorObservable.html" data-type="entity-link">EllipseEditorObservable</a>
                            </li>
                            <li class="link">
                                <a href="classes/EntitiesDrawerService.html" data-type="entity-link">EntitiesDrawerService</a>
                            </li>
                            <li class="link">
                                <a href="classes/HippodromeEditorObservable.html" data-type="entity-link">HippodromeEditorObservable</a>
                            </li>
                            <li class="link">
                                <a href="classes/HtmlCollection.html" data-type="entity-link">HtmlCollection</a>
                            </li>
                            <li class="link">
                                <a href="classes/HtmlPrimitive.html" data-type="entity-link">HtmlPrimitive</a>
                            </li>
                            <li class="link">
                                <a href="classes/OptimizedEntityCollection.html" data-type="entity-link">OptimizedEntityCollection</a>
                            </li>
                            <li class="link">
                                <a href="classes/PointEditorObservable.html" data-type="entity-link">PointEditorObservable</a>
                            </li>
                            <li class="link">
                                <a href="classes/PolygonEditorObservable.html" data-type="entity-link">PolygonEditorObservable</a>
                            </li>
                            <li class="link">
                                <a href="classes/PolylineEditorObservable.html" data-type="entity-link">PolylineEditorObservable</a>
                            </li>
                            <li class="link">
                                <a href="classes/PrimitivesDrawerService.html" data-type="entity-link">PrimitivesDrawerService</a>
                            </li>
                            <li class="link">
                                <a href="classes/RectangleEditorObservable.html" data-type="entity-link">RectangleEditorObservable</a>
                            </li>
                            <li class="link">
                                <a href="classes/Registration.html" data-type="entity-link">Registration</a>
                            </li>
                            <li class="link">
                                <a href="classes/SmartAssigner.html" data-type="entity-link">SmartAssigner</a>
                            </li>
                            <li class="link">
                                <a href="classes/StaticPrimitiveDrawer.html" data-type="entity-link">StaticPrimitiveDrawer</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AcHtmlManager.html" data-type="entity-link">AcHtmlManager</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BillboardPrimitiveDrawerService.html" data-type="entity-link">BillboardPrimitiveDrawerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BoxDrawerService.html" data-type="entity-link">BoxDrawerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CameraService.html" data-type="entity-link">CameraService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CesiumHeatMapMaterialCreator.html" data-type="entity-link">CesiumHeatMapMaterialCreator</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CesiumProperties.html" data-type="entity-link">CesiumProperties</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CesiumService.html" data-type="entity-link">CesiumService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CirclesEditorService.html" data-type="entity-link">CirclesEditorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CirclesManagerService.html" data-type="entity-link">CirclesManagerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConfigurationService.html" data-type="entity-link">ConfigurationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ContextMenuService.html" data-type="entity-link">ContextMenuService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CoordinateConverter.html" data-type="entity-link">CoordinateConverter</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CorridorDrawerService.html" data-type="entity-link">CorridorDrawerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CylinderDrawerService.html" data-type="entity-link">CylinderDrawerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CzmlDrawerService.html" data-type="entity-link">CzmlDrawerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DynamicEllipseDrawerService.html" data-type="entity-link">DynamicEllipseDrawerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DynamicPolylineDrawerService.html" data-type="entity-link">DynamicPolylineDrawerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EllipsesEditorService.html" data-type="entity-link">EllipsesEditorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EllipsesManagerService.html" data-type="entity-link">EllipsesManagerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EllipsoidDrawerService.html" data-type="entity-link">EllipsoidDrawerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GeoUtilsService.html" data-type="entity-link">GeoUtilsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HippodromeEditorService.html" data-type="entity-link">HippodromeEditorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HippodromeManagerService.html" data-type="entity-link">HippodromeManagerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HtmlDrawerService.html" data-type="entity-link">HtmlDrawerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/KeyboardControlService.html" data-type="entity-link">KeyboardControlService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LabelPrimitiveDrawerService.html" data-type="entity-link">LabelPrimitiveDrawerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MapEventsManagerService.html" data-type="entity-link">MapEventsManagerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MapLayersService.html" data-type="entity-link">MapLayersService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MapsManagerService.html" data-type="entity-link">MapsManagerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ModelDrawerService.html" data-type="entity-link">ModelDrawerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PlonterService.html" data-type="entity-link">PlonterService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PointPrimitiveDrawerService.html" data-type="entity-link">PointPrimitiveDrawerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PointsEditorService.html" data-type="entity-link">PointsEditorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PointsManagerService.html" data-type="entity-link">PointsManagerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PolygonsEditorService.html" data-type="entity-link">PolygonsEditorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PolygonsManagerService.html" data-type="entity-link">PolygonsManagerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PolylineDrawerService.html" data-type="entity-link">PolylineDrawerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PolylinePrimitiveDrawerService.html" data-type="entity-link">PolylinePrimitiveDrawerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PolylinesEditorService.html" data-type="entity-link">PolylinesEditorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PolylinesManagerService.html" data-type="entity-link">PolylinesManagerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PolylineVolumeDrawerService.html" data-type="entity-link">PolylineVolumeDrawerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PrimitivePolygonDrawerService.html" data-type="entity-link">PrimitivePolygonDrawerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RectangleDrawerService.html" data-type="entity-link">RectangleDrawerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RectanglesEditorService.html" data-type="entity-link">RectanglesEditorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RectanglesManagerService.html" data-type="entity-link">RectanglesManagerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ScreenshotService.html" data-type="entity-link">ScreenshotService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SelectionManagerService.html" data-type="entity-link">SelectionManagerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StaticCircleDrawerService.html" data-type="entity-link">StaticCircleDrawerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StaticEllipseDrawerService.html" data-type="entity-link">StaticEllipseDrawerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StaticPolygonDrawerService.html" data-type="entity-link">StaticPolygonDrawerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StaticPolylineDrawerService.html" data-type="entity-link">StaticPolylineDrawerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ViewerConfiguration.html" data-type="entity-link">ViewerConfiguration</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ViewerFactory.html" data-type="entity-link">ViewerFactory</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WallDrawerService.html" data-type="entity-link">WallDrawerService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/ActiveDefinition.html" data-type="entity-link">ActiveDefinition</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BasicContextMenu.html" data-type="entity-link">BasicContextMenu</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BasicEditUpdate.html" data-type="entity-link">BasicEditUpdate</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Cartesian2.html" data-type="entity-link">Cartesian2</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Cartesian3.html" data-type="entity-link">Cartesian3</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CircleEditOptions.html" data-type="entity-link">CircleEditOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CircleEditUpdate.html" data-type="entity-link">CircleEditUpdate</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ClampTo3DOptions.html" data-type="entity-link">ClampTo3DOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ContextMenuOptions.html" data-type="entity-link">ContextMenuOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EditorEditOptions.html" data-type="entity-link">EditorEditOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EllipseEditOptions.html" data-type="entity-link">EllipseEditOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EllipseEditUpdate.html" data-type="entity-link">EllipseEditUpdate</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EllipseProps.html" data-type="entity-link">EllipseProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EntitiesDrawerOptions.html" data-type="entity-link">EntitiesDrawerOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EventRegistrationInput.html" data-type="entity-link">EventRegistrationInput</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EventResult.html" data-type="entity-link">EventResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/HeatmapDataSet.html" data-type="entity-link">HeatmapDataSet</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/HeatMapOptions.html" data-type="entity-link">HeatMapOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/HeatPointDataPoint.html" data-type="entity-link">HeatPointDataPoint</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/HippodromeEditOptions.html" data-type="entity-link">HippodromeEditOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/HippodromeEditUpdate.html" data-type="entity-link">HippodromeEditUpdate</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/HippodromeProps.html" data-type="entity-link">HippodromeProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IconDragEvent.html" data-type="entity-link">IconDragEvent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDescription.html" data-type="entity-link">IDescription</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/KeyboardControlDefinition.html" data-type="entity-link">KeyboardControlDefinition</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/KeyboardControlParams.html" data-type="entity-link">KeyboardControlParams</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LabelProps.html" data-type="entity-link">LabelProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LabelStyle.html" data-type="entity-link">LabelStyle</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LayerOptions.html" data-type="entity-link">LayerOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ModuleConfiguration.html" data-type="entity-link">ModuleConfiguration</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Movement.html" data-type="entity-link">Movement</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PickConfiguration.html" data-type="entity-link">PickConfiguration</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PointEditOptions.html" data-type="entity-link">PointEditOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PointEditUpdate.html" data-type="entity-link">PointEditUpdate</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PointProps.html" data-type="entity-link">PointProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PolygonEditOptions.html" data-type="entity-link">PolygonEditOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PolygonEditUpdate.html" data-type="entity-link">PolygonEditUpdate</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PolygonProps.html" data-type="entity-link">PolygonProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PolylineEditOptions.html" data-type="entity-link">PolylineEditOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PolylineEditUpdate.html" data-type="entity-link">PolylineEditUpdate</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PolylineProps.html" data-type="entity-link">PolylineProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PositionWithPointProps.html" data-type="entity-link">PositionWithPointProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RangeAndBearingOptions.html" data-type="entity-link">RangeAndBearingOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Rectangle.html" data-type="entity-link">Rectangle</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Rectangle-1.html" data-type="entity-link">Rectangle</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RectangleEditOptions.html" data-type="entity-link">RectangleEditOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RectangleEditUpdate.html" data-type="entity-link">RectangleEditUpdate</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RectangleProps.html" data-type="entity-link">RectangleProps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SelectionOptions.html" data-type="entity-link">SelectionOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Vec2.html" data-type="entity-link">Vec2</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Vec3.html" data-type="entity-link">Vec3</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ZoomData.html" data-type="entity-link">ZoomData</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});