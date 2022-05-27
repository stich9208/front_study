export interface productOptionInterface {
  created_at: Date;
  id: number;
  name: string;
  prcie: number;
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
