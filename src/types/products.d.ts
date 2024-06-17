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
