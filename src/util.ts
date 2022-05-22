import { Router } from "./Router";
import { storeInterface } from "./interface/store";
//variables
export const root = document.getElementsByClassName("App")[0];

export let store: storeInterface = {
  currentPath: "/",
  productId: 0,
  productList: [],
};

//functions
export const render = (root: Element, store: any): void => {
  console.log("render!!", store.currentPath);
  root.innerHTML = Router(store);
};

export const updateState = (newState: any, state: any, root: any): void => {
  let updatedState = Object.assign(state, newState);
  state = updatedState;
  return render(root, store);
};

export const moveRoute = (e: Event, path: string) => {
  window.history.pushState({}, path, location.origin + path);
  updateState({ currentPath: path }, store, root);
};

export const getList = () => {
  fetch("http://localhost:3000/dev/products")
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((err) => console.log("error", err));
};
