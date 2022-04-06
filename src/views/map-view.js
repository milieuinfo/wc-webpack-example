import { LitElement, html } from "lit-element";
import "uig-webcomponents/lib/components/map";
import {VlMapSelectAction, VlMapModifyAction, VlMapDeleteAction} from "uig-webcomponents/lib/components/map";
import "uig-webcomponents/lib/components/button";
import "uig-webcomponents/lib/components/button/styles.css";

class VlMapFilteredSelectAction extends VlMapSelectAction {
  appliesTo(feature) {
    return feature.getId() === 4 || feature.getId() === 3;
  }
}
customElements.define("vl-map-filtered-select-action", VlMapFilteredSelectAction);

class VlMapFilteredModifyAction extends VlMapModifyAction {
  appliesTo(feature) {
    return feature.getId() === 1;
  }
}
customElements.define("vl-map-filtered-modify-action", VlMapFilteredModifyAction);

class VlMapFilteredDeleteAction extends VlMapDeleteAction {
  appliesTo(feature) {
    return feature.getId() === 2 || feature.getId() === 3;
  }
}
customElements.define("vl-map-filtered-delete-action", VlMapFilteredDeleteAction);

export class MapView extends LitElement {
  render() {
    const features = {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          id: 1,
          geometry: { type: 'Point', coordinates: [151285.5138477709, 211586.43498009123] },
        },
        {
          type: "Feature",
          id: 2,
          geometry: {
            type: "LineString",
            coordinates: [
              [140815, 210000],
              [150000, 225000],
            ],
          },
        },
        {
          type: "Feature",
          id: 3,
          geometry: {
            type: "Polygon",
            coordinates: [
              [
                [135000, 193972],
                [135000, 200000],
                [145000, 200000],
                [145000, 193972],
                [135000, 193972],
              ],
            ],
          },
        },
        {
          type: "Feature",
          id: 4,
          geometry: {
            type: "Polygon",
            coordinates: [
              [
                [85000, 193972],
                [85000, 200000],
                [90000, 200000],
                [90000, 193972],
                [85000, 193972],
              ],
            ],
          },
        },
      ],
    };

    return html`
    <app-template>
      <vl-map>
        <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        <vl-map-features-layer data-vl-features=${JSON.stringify(features)} data-vl-auto-extent>
          <vl-map-layer-style></vl-map-layer-style>
          <vl-map-layer-circle-style></vl-map-layer-circle-style>
          <vl-map-filtered-select-action id="select-action" data-vl-default-active></vl-map-filtered-select-action>
          <vl-map-filtered-modify-action id="modify-action"
              data-vl-snapping
              data-vl-snapping-pixel-tolerance="1000">
            <vl-map-wfs-layer
                data-vl-name="Stromend waterlichamen"
                data-vl-url="https://geoserver.vmm.be/geoserver/vmm/wfs"
                data-vl-layers="owl_l"
                data-vl-max-resolution="4">
          </vl-map-filtered-modify-action>
          <vl-map-filtered-delete-action id="delete-action"></vl-map-filtered-delete-action>
        </vl-map-features-layer>
      </vl-map>
      
      <div>
        <button is="vl-button" @click="${this.__activateSelectAction}">Selecteren</button>
        <button is="vl-button" @click="${this.__activateModifyAction}">Bewerken</button>
        <button is="vl-button" @click="${this.__activateDeleteAction}">Verwijderen</button>
      </div>
    </app-template>`;
  }

  __activateSelectAction() {
    this.querySelector('#select-action').activate();
  }

  __activateModifyAction() {
    this.querySelector('#modify-action').activate();
  }

  __activateDeleteAction() {
    this.querySelector('#delete-action').activate();
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define("map-view", MapView);
