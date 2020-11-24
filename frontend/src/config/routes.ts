import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode } from "react";
import { HomeView } from "../components/HomeView";
import { MostLocationBusinessView } from "../components/MostLocationsBusinessView";
import { OldestBusinessView } from "../components/OldestBusinessView";

interface RouteConfig {
  path: string;
  exact: boolean;
  breadcrumb: ReactNode;
  component: React.ComponentType;
}

export const routes: Array<RouteConfig> = [
  {
    path: "/",
    exact: true,
    breadcrumb: FontAwesomeIcon({
      icon: faHome,
      size: "lg",
      className: "Home",
    }),
    component: HomeView,
  },
  {
    path: "/oldest",
    exact: false,
    breadcrumb: "Oldest business",
    component: OldestBusinessView,
  },
  {
    path: "/most-locations",
    exact: false,
    breadcrumb: "Business with most locations",
    component: MostLocationBusinessView,
  },
];
