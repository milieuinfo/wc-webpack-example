import { LitElement, html } from "lit-element";

export class Home extends LitElement {
  render() {
    return html`<p></p>`;
  }
  createRenderRoot() {
    return this;
  }
}

customElements.define("page-home", Home);
