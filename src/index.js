import { Router } from "@vaadin/router";
import "uig-webcomponents/lib/components/body";
import "uig-webcomponents/lib/components/body/styles.css";
import "./components/template";
import "./views/home";
import "./views/video-player-view";
import "./views/map-view";

const routes = [
  {
    path: "/",
    component: "page-home",
  },
  {
    path: "/video-player",
    component: "video-player-view",
  },
  {
    path: "/map",
    component: "map-view",
  },
];

const app = document.getElementById("app");
export const router = new Router(app);
router.setRoutes(routes);
