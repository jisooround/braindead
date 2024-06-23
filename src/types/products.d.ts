export interface SizeAvailability {
  [key: string]: boolean;
}

export interface Product {
  category: string;
  created_at: string;
  id: number;
  is_new: boolean;
  is_sold_out: boolean;
  name: string;
  photos: string[];
  price: number;
  sizes: SizeAvailability;
}

export interface ProductPage {
  page: number;
  products: Product[];
  total_items: number;
  total_pages: number;
}

export interface ResponseDetailData {
  id: number;
  created_at: string;
  updated_at: string;
  category: string;
  shop_for: string;
  name: string;
  description: string;
  price: number;
  sizes: SizeAvailability;
  photos: string[];
  is_sold_out: boolean;
  is_new: boolean;
  material: string;
  color: string;
}
