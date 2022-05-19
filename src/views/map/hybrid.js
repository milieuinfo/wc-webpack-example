import { LitElement, html } from "lit-element";
import "uig-webcomponents/lib/components/map";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import { ref, createRef } from "lit/directives/ref.js";
import { Circle, Fill, Style, Text } from "ol/style";

export class HybridMap extends LitElement {
  static properties = {
    // map: {},
    // featuresLayer: {},
    features: {},
  };

  constructor() {
    super();
    this.mapRef = createRef();
    this.features = [
      new Feature({
        geometry: new Point([147055.0, 197908.0]),
      }),
    ];
    this.featuresLayer = new VectorLayer({
      source: new VectorSource(),
      style: new Style({
        image: new Circle({
          fill: new Fill({
            color: "#AD3E00",
          }),
          radius: 11,
        }),
        text: new Text({
          font: "bold 14px Flanders Art Sans,sans-serif",
          fill: new Fill({ color: "#fff" }),
          text: "B",
        }),
      }),
    });
  }

  firstUpdated() {
    const map = this.mapRef.value.map;
    this.map = map;
  }

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      switch (propName) {
        case "features":
          if (this.features.length > 0 && this.map) {
            this.featuresLayer.setSource(
              new VectorSource({
                features: this.features,
              })
            );
            this.map.addLayer(this.featuresLayer);
            this.map.getView().fit(this.featuresLayer.getSource().getExtent(), {
              maxZoom: 8,
            });
          }
          break;
        default:
          break;
      }
    });
  }

  render() {
    return html`
      <vl-map ${ref(this.mapRef)}>
        <vl-map-overview-map></vl-map-overview-map>
        <vl-map-baselayer-grb-ortho></vl-map-baselayer-grb-ortho>
        <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
      </vl-map>
    `;
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define("hybrid-map", HybridMap);
