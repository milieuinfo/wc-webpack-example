import { LitElement, html } from "lit-element";
import "uig-webcomponents/lib/components/template";
import "uig-webcomponents/lib/components/header";
import "uig-webcomponents/lib/components/footer";
import "uig-webcomponents/lib/components/content-header";
import "uig-webcomponents/lib/components/grid";
import "uig-webcomponents/lib/components/image";
import "uig-webcomponents/lib/components/image/styles.css";
import "uig-webcomponents/lib/components/typography";
export class Home extends LitElement {
  render() {
    return html`<vl-template>
      <vl-header
        slot="header"
        data-vl-identifier="59188ff6-662b-45b9-b23a-964ad48c2bfb"
        data-vl-development
      ></vl-header>
      <div slot="main">
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
            >Examples</a
          >
        </vl-content-header>
        <section is="vl-region">
          <div is="vl-layout">
            <div id="grid" is="vl-grid" is-stacked slot="main">
              <vl-typography><h1 is="vl-h1">Webpack example</h1></vl-typography>
            </div>
          </div>
        </section>
      </div>
      <vl-footer
        slot="footer"
        data-vl-identifier="0337f8dc-3266-4e7a-8f4a-95fd65189e5b"
        data-vl-development
      ></vl-footer>
    </vl-template>`;
  }
  createRenderRoot() {
    return this;
  }
}

customElements.define("page-home", Home);