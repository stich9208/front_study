import { updateState, store } from "../util";
import { productType } from "../types/data";
import { productDetailInterface } from "../interface/data";

export const List = (): string => {
  if (store.product.name) {
    updateState({ product: {} as productDetailInterface }, store);
  }
  if (store.selectedOptionIndex !== "")
    updateState({ selectedOptionIndex: "" }, store);
  let productsHtml = "";

  store.productList.map((product: productType) => {
    productsHtml += `<li class="Product" data-id=${product.id}>
    <img
      src=${product.imageUrl}
    />
    <div class="Product__info">
      <div>${product.name}</div>
      <div>${product.price}원~</div>
    </div>
  </li>`;
  });

  return store.productList.length !== 0
    ? `<div class="ProductListPage">
    <h1>상품목록</h1>
    <ul>
    ${productsHtml}
    </ul>
  </div>`
    : "";
};
