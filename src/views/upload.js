import { LitElement, html } from "lit-element";
import "uig-webcomponents/lib/legacy/upload";
import "vl-ui-alert";
import "vl-ui-select";
import "vl-ui-select/dist/style.css";
import { wrap } from "../templates/wrap";

export class UploadView extends LitElement {
  render() {
    return wrap(html`<div is="vl-column" data-vl-size="12">
        <vl-upload
          url="http://httpbin.org/post"
          data-vl-input-name="files"
        ></vl-upload>
      </div>
      <div is="vl-column" data-vl-size="12">
        <vl-alert data-vl-icon="warning" data-vl-type="error">
          <p>Test</p>
        </vl-alert>
      </div>
      <div is="vl-column" data-vl-size="12">
        <select is="vl-select">
          <option value="Belgium">België</option>
          <option value="Germany">Duitsland</option>
          <option value="France">Frankrijk</option>
        </select>
      </div>`);
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define("upload-view", UploadView);
