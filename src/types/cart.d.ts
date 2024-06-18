import { Product } from "./products";

export interface CartData {
  product_id: number;
  size: string;
  quantity?: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
  size: string;
}

export interface CartDataResponse {
  is_paid: boolean;
  items: CartItem[];
  memo: string;
}

export interface DeleteCartItem {
  product_id: number | string;
}
