export interface ListItem {
  name: string;
  path: string;
}

export interface LeftMenu {
  type: string;
  title: string;
  path: string;
  id: number;
  element: ListItem[];
}

export interface MenuComponent {
  component: React.ReactNode | React.Component;
}

export interface RightMenu {
  type: string;
  title: string;
  path: string;
  id: number;
  element: { component: JSX.Element }[];
}

// 새로운 객체의 타입 정의
export interface MenuList {
  position: string;
  list: RightMenu[] | LeftMenu[];
}
