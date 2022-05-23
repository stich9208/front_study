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
  root.innerHTML = Router(store);
};

export const updateState = (newState: any, state: any): void => {
  let updatedState = Object.assign(state, newState);
  state = updatedState;
  return render(root, store);
};

export const moveRoute = (e: Event, path: string) => {
  window.history.pushState({}, path, location.origin + path);
  updateState({ currentPath: path }, store);
};

export const getList = async () => {
  fetch("http://localhost:3000/dev/products")
    .then((res) => res.json())
    .then((res) => updateState({ productList: res }, store))
    .catch((err) => console.log("list api error", err));
};

// export const getProduct =
