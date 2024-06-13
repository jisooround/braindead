import styled from "@emotion/styled";

interface IProduct {
  productName: string;
  price: number;
  size: string[];
  desc: string;
  img_src: string;
}

const cartItemList: IProduct[] = [
  {
    productName: "",
    price: 14000,
    size: ["OS"],
    desc: "Final Sale",
    img_src: "",
  },
  {
    productName: "",
    price: 14000,
    size: ["OS"],
    desc: "Final Sale",
    img_src: "",
  },
];

const Cart = () => {
  const totalPrice = cartItemList.reduce((accumulator, item) => {
    return accumulator + item.price;
  }, 0);
  return (
    <CartContainer>
      Cart
      <ItemList>
        {cartItemList.map((item, index) => {
          return <div key={index}>{item.productName}</div>;
        })}
      </ItemList>
      <CartInfo>
        <div>
          <p>SUMMARY</p>
          <p>{cartItemList.length}</p>
        </div>
        <div>
          <p>SUBTOTAL</p>
          <p>Taxes & shipping calculated at checkout</p>
        </div>
        <div>
          <p>Add Note</p>
        </div>
      </CartInfo>
      <ButtonWrap>
        <button>CHECK OUT {totalPrice}</button>
        <button>CONTINUE SHOPPING</button>
      </ButtonWrap>
    </CartContainer>
  );
};

const CartContainer = styled.div`
  height: 100vh;
`;

const ItemList = styled.div``;

const CartInfo = styled.div``;

const ButtonWrap = styled.div``;

export default Cart;
