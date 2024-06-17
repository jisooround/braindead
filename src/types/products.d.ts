export interface SizeAvailability {
  XS: boolean;
  S: boolean;
  M: boolean;
  L: boolean;
  XL: boolean;
  XXL: boolean;
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
  // 추가로 필요한 속성이 있으면 여기서 정의합니다.
}

export interface ProductPage {
  page: number;
  products: Product[];
  total_items: number;
  total_pages: number;
}
