export interface UserCredentials {
  // 로그인과 회원가입할 때 쓰는 data
  username: string;
  password: string;
}

export interface User {
  // 응답받는 데이터에 있는 user Data
  address_1: string;
  address_2: string;
  city: string;
  company: string;
  country: string;
  email: string;
  id: number;
  is_staff: boolean;
  last_login: string | null;
  name: string;
  phone: string;
  username: string;
  zipcode: string;
}

export interface ResponseUserData {
  // 응답 받는 데이터
  user: User;
  token: string;
}

export interface EditUser {
  // 응답받는 데이터에 있는 user Data
  name?: string;
  address_1?: string;
  city?: string;
  country?: string;
  email?: string;
  phone?: string;
  zipcode?: string;
}

export interface ResponseUserMe {
  // 응답받는 데이터에 있는 user Data
  name?: string;
  address_1?: string;
  city?: string;
  country?: string;
  email?: string;
  phone?: string;
  zipcode?: string;
}
