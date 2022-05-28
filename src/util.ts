import { Router } from "./Router";
import { storeInterface } from "./interface/store";
import { productDetailInterface } from "./interface/data";
import { cartItemType } from "./types/data";

//variables
export const root = document.getElementsByClassName("App")[0];

export let store: storeInterface = {
  currentPath: "/",
  product: {} as productDetailInterface,
  productId: Number(),
  productList: [],
  selectedOptionIndex: "",
  optionCount: 1,
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

export const commaForPrice = (price: number) => {
  return price.toLocaleString();
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
    const input = document.getElementsByTagName("input")[0];
    const orderBtn = document.getElementsByClassName("OrderButton")[0];

    select.addEventListener("change", (e: Event) => {
      const target = e.currentTarget as HTMLSelectElement;
      updateState(
        { selectedOptionIndex: target.selectedIndex, optionCount: 1 },
        store
      );
    });

    orderBtn.addEventListener("click", () => {
      if (store.selectedOptionIndex === "") {
        return;
      }
      let cartList: cartItemType[] = [];
      const cartItem = {
        productId: store.productId,
        optionId:
          typeof store.selectedOptionIndex === "number"
            ? store.product.productOptions[store.selectedOptionIndex - 1]?.id
            : Number(),
        quantity: store.optionCount,
      };
      if (localStorage.getItem("products_cart")) {
        cartList = JSON.parse(localStorage.getItem("products_cart") as string);
        cartList.push(cartItem);
        localStorage.setItem("products_cart", JSON.stringify(cartList));
      } else {
        cartList.push(cartItem);
        localStorage.setItem("products_cart", JSON.stringify(cartList));
      }
      updateState({ optionCount: 1 }, store);
      moveRoute("/cart");
    });

    if (input)
      input.addEventListener("change", (e: Event) => {
        const target = e.currentTarget as HTMLSelectElement;
        updateState({ optionCount: target.value }, store);
      });
  }
};

//api functions
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
