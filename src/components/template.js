import { LitElement, html } from "lit-element";
import "uig-webcomponents/lib/components/template";
import "uig-webcomponents/lib/components/header";
import "uig-webcomponents/lib/components/footer";

export class Template extends LitElement {
  render() {
    return html`<vl-template>
      <vl-header
        slot="header"
        data-vl-identifier="59188ff6-662b-45b9-b23a-964ad48c2bfb"
        data-vl-development
      ></vl-header>
      <div slot="main"><slot></slot></div>
      <vl-footer
        slot="footer"
        data-vl-identifier="0337f8dc-3266-4e7a-8f4a-95fd65189e5b"
        data-vl-development
      ></vl-footer>
    </vl-template>`;
  }
}

customElements.define("app-template", Template);
