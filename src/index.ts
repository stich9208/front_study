import "../styles.css";
import { App } from "./App";

import { updateState } from "./util";

const main = document.getElementsByClassName("App")[0];

export let store = {
  currentPath: "/",
};

export const render = (root: Element) => {
  const { pathname } = window.location;
  console.log("render", pathname);
  root.innerHTML = App();
};

// if (pathname !== initialState.currentPath) {
//   updateState({ currentPath: pathname }, initialState, main, render);
// }

window.addEventListener("popstate", () => console.log("poppo"));

render(main);

const clickFunc = () => {
  window.history.pushState({}, "/lala", window.location.origin + "/lala");
  updateState({ currentPath: "/lala" }, store, main, render);
};

const btn = document.getElementsByClassName("bubu")[0];
btn.addEventListener("click", clickFunc);
