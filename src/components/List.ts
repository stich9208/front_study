import { getList, updateState, store } from "../util";
import { productType } from "../types/data";

export const List = (): string => {
  let productsHtml = "";

  //각 product Element 생성기
  const productCreater = (elem: productType) => {
    const liTag = document.createElement("li");
    liTag.className = "Product";
    liTag.innerHTML = `<img
    src=${elem.imageUrl}
  />
  <div class="Product__info">
    <div>${elem.name}</div>
    <div>${elem.price}원~</div>
  </div>`;

    return liTag.outerHTML;
  };

  store.productList.map((product: productType) => {
    productsHtml += productCreater(product);
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
