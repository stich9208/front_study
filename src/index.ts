import "../styles.css";

import { root, store, render, updateState, moveRoute } from "./util";

const { pathname } = location;

if (pathname !== store.currentPath) {
  updateState({ currentPath: location.pathname }, store, root);
}

window.addEventListener("popstate", (e) =>
  updateState({ currentPath: location.pathname }, store, root)
);

window.addEventListener("popstate", (e) =>
  updateState({ currentPath: location.pathname }, store, root)
);

render(root, store);

const btn = document.getElementsByClassName("bubu")[0];
const dbtn = document.getElementsByClassName("detail")[0];
dbtn.addEventListener("click", (e) => moveRoute(e, "/products/191919"));
