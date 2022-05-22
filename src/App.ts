import Router from "./router/index";

import Cart from "./pages/Cart/Cart";
import ProductList from "./pages/ProductList/ProductList";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import NotFound from "./pages/NotFound/NotFound";
import { $ } from "./utils/dom.util";

export default class App {
  _Cart;
  _ProductList;
  _ProductDetail;
  _NotFound;
  $target;
  $props;
  $state;

  constructor($target, $props = {}) {
    this.$target = $target;
    this.$props = $props;
    this.render();
  }

  render() {
    this.$target.innerHTML = this.template();
    this.mounted();
  }

  template() {
    return `
          <div id="app">
          App
            </div>
        `;
  }

  mounted() {
    // this._Cart = new Cart($("#app"));
    this._ProductList = new ProductList($("#app"));
    // this._ProductDetail = new ProductDetail($("#app"));
  }
}
