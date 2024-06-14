export interface UserCredentials {
  // 로그인과 회원가입할 때 쓰는 data
  username: string;
  password: string;
}

export interface User {
  // 응답받는 데이터에 있는 user Data
  id: number;
  last_login: string | null;
  is_superuser: boolean;
  username: string;
  email: string;
  is_staff: boolean;
  is_active: boolean;
  date_joined: string;
  first_name: string;
  last_name: string;
  name: string;
  phone: string;
  company: string;
  address_1: string;
  address_2: string;
  city: string;
  country: string;
  zipcode: string;
  groups: any[]; // 그룹에 대한 더 구체적인 타입이 있다면 그 타입을 사용
  user_permissions: any[]; // 권한에 대한 더 구체적인 타입이 있다면 그 타입을 사용
}

export interface AuthenticationResponse {
  // 응답 받는 데이터
  user: User;
  token: string;
  username: string;
}
