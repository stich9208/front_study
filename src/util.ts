import { Router } from "./Router";
import { storeInterface } from "./interface/store";
import { productDetailInterface } from "./interface/data";

//variables
export const root = document.getElementsByClassName("App")[0];

export let store: storeInterface = {
  currentPath: "/",
  product: {} as productDetailInterface,
  productId: Number(),
  productList: [],
  selectedOptionIndex: "",
  optionCount: Number(),
};

//functions
export const render = (root: Element, store: any): void => {
  root.innerHTML = Router(store);
  hydrate();
};

export const updateState = (newState: any, state: any): void => {
  let updatedState = Object.assign(state, newState);
  state = updatedState;
  return render(root, store);
};

export const moveRoute = (path: string) => {
  window.history.pushState({}, path, location.origin + path);
  updateState({ currentPath: path }, store);
};

export const getList = async () => {
  fetch("http://localhost:3000/dev/products")
    .then((res) => res.json())
    .then((res) => updateState({ productList: res }, store))
    .catch((err) => console.log("list api error", err));
};

export const getProduct = async (id: number) => {
  fetch(`http://localhost:3000/dev/products/${id}`)
    .then((res) => res.json())
    .then((res) => updateState({ product: res }, store))
    .catch((err) => console.log("detail api error", err));
};

export const hydrate = () => {
  if (store.currentPath === "/") {
    const ProductList = document.getElementsByClassName("Product");
    for (let product of ProductList) {
      product.addEventListener("click", (e: Event) => {
        const target = e.currentTarget as HTMLElement;
        moveRoute(`/product/${target.dataset.id}`);
      });
    }
  }
  if (store.currentPath.includes("product")) {
    const select = document.getElementsByTagName("select")[0];
    select.addEventListener("change", (e: Event) => {
      const target = e.currentTarget as HTMLSelectElement;
      updateState({ selectedOptionIndex: target.selectedIndex }, store);
    });
  }
};
