export interface productOptionInterface {
  created_at: Date;
  id: number;
  name: string;
  price: number;
  stock: number;
  updated_at: Date;
}

export interface productDetailInterface {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
  productOptions: productOptionInterface[];
}

export interface cartItemInterface {
  productId: number;
  optionId: number;
  quantity: number;
}
