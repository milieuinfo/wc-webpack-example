import { LitElement, html } from "lit-element";
import "uig-webcomponents/lib/components/doormat";
import "uig-webcomponents/lib/components/doormat/styles.css";
import { page } from "../templates/page";
export class Home extends LitElement {
  render() {
    return page({
      children: html` <div is="vl-column" data-vl-size="8">
          <a is="vl-doormat" href="/map">
            <h2 is="vl-doormat-title">Map</h2>
          </a>
        </div>
        <div is="vl-column" data-vl-size="8">
          <a is="vl-doormat" href="/tabs">
            <h2 is="vl-doormat-title">Tabs</h2>
          </a>
        </div>
        <div is="vl-column" data-vl-size="8">
          <a is="vl-doormat" href="/upload">
            <h2 is="vl-doormat-title">Upload</h2>
          </a>
        </div>
        <div is="vl-column" data-vl-size="8">
          <a is="vl-doormat" href="/video-player">
            <h2 is="vl-doormat-title">Video player</h2>
          </a>
        </div>
        <div is="vl-column" data-vl-size="8">
          <a is="vl-doormat" href="/form">
            <h2 is="vl-doormat-title">Form</h2>
          </a>
        </div>`,
      title: "Components",
    });
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define("home-view", Home);
