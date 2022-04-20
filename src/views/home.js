import { LitElement, html } from "lit-element";
import "uig-webcomponents/lib/components/content-header";
import "uig-webcomponents/lib/components/image";
import "uig-webcomponents/lib/components/image/styles.css";
import "uig-webcomponents/lib/components/doormat";
import "uig-webcomponents/lib/components/doormat/styles.css";
import data from "../../package.json";
import { wrap } from "../templates/wrap";
export class Home extends LitElement {
  render() {
    return html`
      <vl-content-header>
        <img
          is="vl-image"
          slot="image"
          src="https://images.unsplash.com/photo-1561070791-2526d30994b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
          srcset="
            https://images.unsplash.com/photo-1561070791-2526d30994b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80   400w,
            https://images.unsplash.com/photo-1561070791-2526d30994b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80   700w,
            https://images.unsplash.com/photo-1561070791-2526d30994b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80   800w,
            https://images.unsplash.com/photo-1561070791-2526d30994b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80 1000w,
            https://images.unsplash.com/photo-1561070791-2526d30994b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80 1300w,
            https://images.unsplash.com/photo-1561070791-2526d30994b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80 1400w,
            https://images.unsplash.com/photo-1561070791-2526d30994b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80 1600w,
            https://images.unsplash.com/photo-1561070791-2526d30994b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1900&q=80 1900w,
            https://images.unsplash.com/photo-1561070791-2526d30994b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80 2000w
          "
        />
        <a
          slot="context-link"
          href="https://uig-webcomponents.omgeving.vlaanderen.be/"
          >uig-webcomponents</a
        >
        <a
          slot="title-link"
          href="https://uig-webcomponents.omgeving.vlaanderen.be/"
          >${data.dependencies["uig-webcomponents"]}</a
        >
      </vl-content-header>
      ${wrap(html` <div is="vl-column" data-vl-size="12">
          <a is="vl-doormat" href="/map">
            <h2 is="vl-doormat-title">Map</h2>
          </a>
        </div>
        <div is="vl-column" data-vl-size="12">
          <a is="vl-doormat" href="/tabs">
            <h2 is="vl-doormat-title">Tabs</h2>
          </a>
        </div>
        <div is="vl-column" data-vl-size="12">
          <a is="vl-doormat" href="/upload">
            <h2 is="vl-doormat-title">Upload</h2>
          </a>
        </div>
        <div is="vl-column" data-vl-size="12">
          <a is="vl-doormat" href="/video-player">
            <h2 is="vl-doormat-title">Video player</h2>
          </a>
        </div>`)}
    `;
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define("page-home", Home);
