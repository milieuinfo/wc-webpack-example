import { Router } from "@vaadin/router";
import "uig-webcomponents/lib/components/body";
import "uig-webcomponents/lib/components/body/styles.css";
import "./components/template";

const routes = [
  {
    path: "/",
    component: "page-home",
    action: async () => {
      await import("./views/home");
    },
  },
  {
    path: "/video-player",
    component: "video-player-view",
    action: async () => {
      await import("./views/video-player-view");
    },
  },
  {
    path: "/map",
    component: "map-view",
    action: async () => {
      await import("./views/map-view");
    },
  },
];

const app = document.getElementById("app");
export const router = new Router(app);
router.setRoutes(routes);
