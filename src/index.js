import { Router } from "@vaadin/router";
import "uig-webcomponents/lib/components/body";
import "./views/home.js";

const routes = [
  {
    path: "/",
    component: "page-home",
  },
];

const app = document.getElementById("app");
export const router = new Router(app);
router.setRoutes(routes);
