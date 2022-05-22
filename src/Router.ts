import { List } from "./components/List";
import { Detail } from "./components/Detail";
import { Cart } from "./components/Cart";
import { root, updateState } from "./util";

import { storeInterface } from "./interface/store";

export const Router = (store: storeInterface): string => {
  if (store.currentPath.includes("/product")) {
    const productId = location.pathname.split("/")[2];
    if (store.productId !== Number(productId)) {
      updateState({ productId: Number(productId) }, store, root);
    }
    return Detail(store.productId);
  } else {
    switch (store.currentPath) {
      case "/":
        return List();
      case "/cart":
        return Cart();
      default:
        return List();
    }
  }
};
