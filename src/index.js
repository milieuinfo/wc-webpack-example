import { Router } from "@vaadin/router";
import "uig-webcomponents/lib/components/body";
import "uig-webcomponents/lib/components/header";
import "uig-webcomponents/lib/components/footer";
import "uig-webcomponents/lib/components/grid";
import "uig-webcomponents/lib/components/body/styles.css";
import "uig-webcomponents/lib/components/template";
import "uig-webcomponents/lib/components/content-header";
import "uig-webcomponents/lib/components/image";
import "uig-webcomponents/lib/components/image/styles.css";
import "uig-webcomponents/lib/components/titles/styles.css";
import "uig-webcomponents/lib/components/titles";
import "uig-webcomponents/lib/components/typography";

const routes = [
  {
    path: "/",
    component: "home-view",
    action: async () => {
      await import("./views/home");
    },
  },
  {
    path: "/tabs",
    component: "tabs-view",
    action: async () => {
      await import("./views/tabs");
    },
  },
  {
    path: "/video-player",
    component: "video-player-view",
    action: async () => {
      await import("./views/video-player");
    },
  },
  {
    path: "/map",
    component: "map-view",
    action: async () => {
      await import("./views/map");
    },
  },
  {
    path: "/upload",
    component: "upload-view",
    action: async () => {
      await import("./views/upload");
    },
  },
  {
    path: "/form",
    component: "form-view",
    action: async () => {
      await import("./views/form");
    },
  },
];

export const router = new Router(document.getElementById("app"));
router.setRoutes(routes);
