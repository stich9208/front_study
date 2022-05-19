import { List } from "./components/List";
import { Detail } from "./components/Detail";
import { Cart } from "./components/Cart";
import { createHtmlElement } from "./util";
import { apps } from "../node_modules/open/index";

const { pathname } = window.location;

const Route = (path: string): void => {
  window.history.pushState({}, "", `${path}`);
};

const Router = () => {};

console.log(pathname);

export const App = (): HTMLElement => {
  return pathname === "/web" ? List() : Detail();
};
