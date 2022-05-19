import { LitElement, html } from "lit-element";
import { wrap } from "../../templates/wrap";
import "./hybrid";
import "./native";

export class MapView extends LitElement {
  render() {
    return html`
      ${wrap(html`
        <div is="vl-column" data-vl-size="12">
          <native-map></native-map>
        </div>
        <div is="vl-column" data-vl-size="12">
          <hybrid-map></hybrid-map>
        </div>
      `)}
    `;
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define("map-view", MapView);
