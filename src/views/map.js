import { LitElement, html } from "lit-element";
import "uig-webcomponents/lib/components/map";

export class MapView extends LitElement {
  render() {
    const features = {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          id: 1,
          geometry: { type: "Point", coordinates: [210000, 190000] },
        },
        {
          type: "Feature",
          id: 2,
          geometry: {
            type: "LineString",
            coordinates: [
              [170000, 170000],
              [150000, 206000],
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
                [44000, 171000],
                [100000, 171000],
                [100000, 205000],
                [44000, 205000],
                [44000, 171000],
              ],
            ],
          },
        },
      ],
    };

    return html` <app-template>
      <section is="vl-region">
        <div is="vl-layout">
          <div is="vl-grid" data-vl-is-stacked>
            <div is="vl-column" data-vl-size="8">
              <div is="vl-grid" data-vl-is-stacked>
                <div is="vl-column" data-vl-size="12">
                  <vl-map>
                    <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
                    <vl-map-features-layer .features=${features} />
                  </vl-map>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </app-template>`;
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define("map-view", MapView);
