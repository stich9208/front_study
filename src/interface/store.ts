import { productDetailInterface } from "./data";

export interface storeInterface {
  currentPath: string;
  product: productDetailInterface;
  productId: number;
  productList: any;
  selectedOptionIndex: number | string;
  optionCount: number;
}
