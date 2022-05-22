import Cart from "../pages/Cart/Cart";
import ProductList from "../pages/ProductList/ProductList";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import NotFound from "../pages/NotFound/NotFound";
import App from "../App";
import { $ } from "../utils/dom.util";

type TRoute = {
  path: string;
  component: Object;
};
const routes: TRoute[] = [
  //   { path: "/", component: App },
  { path: "/cart", component: Cart },
  { path: "/product", component: ProductList },
  { path: "/product/:id", component: ProductDetail },
];

const $app = $("#app");
// // window.addEventListener("DOMContentLoaded", () => router("/"));
// // const createElement = (string) => {
// //   if (string) {
// //     const $template = document.createElement("template");
// //     $template.innerHTML = string();
// //     return $template.content;
// //   } else return "";
// // };

// const fetchData = async (url: string) => {
//   const res = await fetch(url);
//   const json = await res.json();
//   return json;
// };

function router(path: string) {
  console.log("===", routes.find((route) => route.path === path)?.component);
  try {
    const component =
      routes.find((route) => route.path === path)?.component || NotFound;
    // if ($app && component) $app.innerHTML(component);
    console.log("===", component);
    return component;
  } catch (err) {
    console.error(err);
  }
}

// // const renderHTML = ($el: Element, route: TRoute) => {
// //   $el.innerHTML = route.component;
// // };
// // const historyRouterPush = (pathName: string, $el: Element) => {
// //   window.history.pushState({}, pathName, window.location.origin + pathName);
// //   renderHTML($el, routes[0]);
// // };

export default router;
