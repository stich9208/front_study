import { getProduct } from "../util";
import { store } from "../util";

export const Detail = (id: number): string => {
  const { product, selectedOptionIndex } = store;
  if (!product.name) getProduct(id);

  let optionHtml = "";
  selectedOptionIndex === 0
    ? (optionHtml += "<option selected>선택하세요</option>")
    : (optionHtml += "<option>선택하세요</option>");

  product.productOptions?.map((option, idx) => {
    idx + 1 === selectedOptionIndex
      ? (optionHtml += `<option selected>${option.name}</option>`)
      : (optionHtml += `<option>${option.name}</option>`);
  });

  return `<div class="ProductDetailPage">
  <h1>커피잔 상품 정보</h1>
  <div class="ProductDetail" >
    <img
      src=${product.imageUrl}
    />
    <div class="ProductDetail__info">
      <h2>${product.name}</h2>
      <div class="ProductDetail__price">${product.price}원~</div>
      <select>
      ${optionHtml}
      </select>
      <div class="ProductDetail__selectedOptions">
        <h3>선택된 상품</h3>
        <ul>
        ${
          selectedOptionIndex === 0 || typeof selectedOptionIndex === "string"
            ? ""
            : ` <li>
        ${product.productOptions[selectedOptionIndex - 1]?.name} 10,000원
        <div><input type="number" value="10" />개</div>
      </li>`
        }
        </ul>
        <div class="ProductDetail__totalPrice">175,000원</div>
        <button class="OrderButton">주문하기</button>
      </div>
    </div>
  </div>
</div>`;
};
