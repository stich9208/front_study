import { getList, updateState, store } from "../util";
import { productType } from "../types/data";

export const List = (): string => {
  return store.productList.length !== 0
    ? `<div class="ProductListPage">
    <h1>상품목록</h1>
    <ul>
    ${store.productList.map((product: productType) => {
      return `
      <li class="Product">
      <img
        src=${product.imageUrl}
      />
      <div class="Product__info">
        <div>${product.name}</div>
        <div>${product.price}원~</div>
      </div>
    </li>`;
    })}
    </ul>
  </div>`
    : "";
};
