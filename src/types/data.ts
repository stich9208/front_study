export type productType = {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
};

export type cartItemType = {
  productId: number;
  optionId: number;
  quantity: number;
};
