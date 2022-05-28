import { store, moveRoute, commaForPrice } from "../util";
import { cartItemInterface, productOptionInterface } from "../interface/data";

export const Cart = (): string => {
  const storageCartList = localStorage.getItem("products_cart");
  const { productList } = store;
  let cartHtml = "";
  let totalPrice = 0;

  const emptyCartFunc = () => {
    alert("장바구니가 비어있습니다");
    moveRoute("/");
  };

  if (!storageCartList) emptyCartFunc();
  else {
    const cartList = JSON.parse(storageCartList);
    cartList.map((cartItem: cartItemInterface) => {
      const product = productList[cartItem.productId - 1];
      const productOption = product.productOptions.find(
        (option: productOptionInterface) => option.id === cartItem.optionId
      );
      totalPrice += (product.price + productOption.price) * cartItem.quantity;
      cartHtml += `<li class="Cart__item">
      <img
        src=${product.imageUrl}
      />
      <div class="Cart__itemDesription">
        <div>${product?.name} ${productOption.name} ${commaForPrice(
        product.price
      )}원 ${cartItem.quantity}개</div>
        <div>${commaForPrice(
          (product.price + productOption.price) * cartItem.quantity
        )}원</div>
      </div>
    </li>`;
    });
  }

  return `<div class="CartPage">
  <h1>장바구니</h1>
  <div class="Cart">
    <ul>
    ${cartHtml}
    </ul>
    <div class="Cart__totalPrice">총 상품가격 ${commaForPrice(
      totalPrice
    )}원</div>
    <button class="OrderButton">주문하기</button>
  </div>
</div>`;
};
