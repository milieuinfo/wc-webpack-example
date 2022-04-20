import { html } from "lit-element";

export const wrap = (children) => html`<section is="vl-region">
  <div is="vl-layout">
    <div is="vl-grid" data-vl-is-stacked>
      <div is="vl-column" data-vl-size="8">
        <div is="vl-grid" data-vl-is-stacked>${children}</div>
      </div>
    </div>
  </div>
</section>`;
