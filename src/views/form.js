import { LitElement, html, nothing } from "lit-element";
import { page } from "../templates/page";
import "uig-webcomponents/lib/components/form";
import "uig-webcomponents/lib/components/form/styles.css";
import "uig-webcomponents/lib/components/form-grid";
import "uig-webcomponents/lib/components/button";
import "uig-webcomponents/lib/components/button/styles.css";
import "uig-webcomponents/lib/components/action-group";
import "uig-webcomponents/lib/components/action-group/styles.css";
import "uig-webcomponents/lib/components/input-field";
import "uig-webcomponents/lib/components/input-field/styles.css";
import "uig-webcomponents/lib/components/form-message";
import "../../node_modules/vl-ui-form-message/dist/style.css";
import "uig-webcomponents/lib/legacy/upload";
import "vl-ui-select";
import "../../node_modules/vl-ui-select/dist/style.css";

export class FormView extends LitElement {
  static get properties() {
    return {
      isError: { type: Boolean, state: true },
    };
  }

  constructor() {
    super();
    this.isError = false;
  }

  errorEl = () =>
    this.isError
      ? html`<p is="vl-form-validation-message" data-vl-error>Error message</p>`
      : nothing;

  render() {
    return page({
      children: html`
        <div is="vl-column" data-vl-size="12">
          <button
            is="vl-button"
            @click=${() => {
              this.isError = !this.isError;
            }}
          >
            Toggle error state
          </button>
        </div>
        <div is="vl-column" data-vl-size="12" data-vl-medium-size="12">
          <form is="vl-form">
            <div is="vl-form-group">
              <div is="vl-form-grid" data-vl-is-stacked>
                <div is="vl-form-column" data-vl-size="12">
                  <h5 is="vl-h5">Title</h5>
                </div>
                <div
                  is="vl-form-column"
                  data-vl-size="6"
                  data-vl-small-size="12"
                >
                  <div is="vl-form-grid" data-vl-is-stacked>
                    <div
                      is="vl-form-column"
                      data-vl-size="4"
                      data-vl-small-size="3"
                    >
                      <label is="vl-form-label" for="lname" data-vl-block>
                        Naam
                        <span is="vl-form-annotation-span">(verplicht)</span>
                      </label>
                    </div>
                    <div
                      is="vl-form-column"
                      data-vl-size="6"
                      data-vl-small-size="9"
                    >
                      <input
                        id="lname"
                        name="lname"
                        autocomplete="name"
                        is="vl-input-field"
                        data-vl-block
                        ?data-vl-error=${this.isError}
                      />
                      ${this.errorEl()}
                    </div>
                  </div>
                </div>
                <div
                  is="vl-form-column"
                  data-vl-size="6"
                  data-vl-small-size="12"
                >
                  <div is="vl-form-grid" data-vl-is-stacked>
                    <div
                      is="vl-form-column"
                      data-vl-size="4"
                      data-vl-small-size="3"
                    >
                      <label is="vl-form-label" for="country" data-vl-block>
                        Land
                        <span is="vl-form-annotation-span">(verplicht)</span>
                      </label>
                    </div>
                    <div
                      is="vl-form-column"
                      data-vl-size="6"
                      data-vl-small-size="9"
                    >
                      <select
                        id="country"
                        name="country"
                        is="vl-select"
                        data-vl-block
                        ?data-vl-error=${this.isError}
                      >
                        <option value="Belgium">België</option>
                        <option value="Germany">Duitsland</option>
                        <option value="France">Frankrijk</option>
                      </select>
                      ${this.errorEl()}
                    </div>
                  </div>
                </div>

                <div
                  is="vl-form-column"
                  data-vl-size="2"
                  data-vl-small-size="3"
                >
                  <label is="vl-form-label" for="file" data-vl-block>
                    Bestand
                    <span is="vl-form-annotation-span">(verplicht)</span>
                  </label>
                </div>
                <div is="vl-form-column" data-vl-size="9">
                  <vl-upload
                    id="file"
                    name="file"
                    ?data-vl-error=${this.isError}
                    url="http://httpbin.org/post"
                    data-vl-input-name="files"
                  ></vl-upload>
                  ${this.errorEl()}
                </div>
                <div
                  is="vl-form-column"
                  data-vl-size="2"
                  data-vl-small-size="3"
                ></div>
                <div is="vl-form-column" data-vl-size="9">
                  <div is="vl-action-group">
                    <button is="vl-button" type="submit">Versturen</button>
                    <a is="vl-link" href="#">
                      <span
                        is="vl-icon"
                        data-vl-icon="cross"
                        data-vl-before
                      ></span>
                      Annuleren
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      `,
      title: "Form",
    });
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define("form-view", FormView);
