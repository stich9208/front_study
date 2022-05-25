import "../styles.css";
import { root, store, render, updateState, getList } from "./util";

const { pathname } = location;

//add event
window.addEventListener("popstate", (e) =>
  updateState({ currentPath: location.pathname }, store)
);

//list call
getList();

if (pathname !== store.currentPath) {
  updateState({ currentPath: location.pathname }, store);
}

render(root, store);

document.addEventListener("click", (e: MouseEvent) => {
  if (e?.target && (e.target as Element).className === "Product") {
    console.log(e.target);
  }
  if (
    e?.target &&
    (e.target as Element).parentElement?.className === "Product" &&
    (e.target as Element).tagName === "IMG"
  ) {
    (e.target as Element).parentElement?.click();
  }
});

// const btn = document.getElementsByClassName("bubu")[0];
// const dbtn = document.getElementsByClassName("detail")[0];
// dbtn.addEventListener("click", (e) => moveRoute(e, "/products/191919"));
