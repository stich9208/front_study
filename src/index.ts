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
