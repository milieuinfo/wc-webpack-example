import { LitElement, html } from "lit-element";

export class VideoPlayerView extends LitElement {
  render() {
    return html`<p>video player view</p>`;
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define("video-player-view", VideoPlayerView);
