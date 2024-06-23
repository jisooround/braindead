import styled from "@emotion/styled";
import { useParams } from "react-router-dom";
import useGetDetails from "../../hooks/useGetDetails";
import { formatPrice } from "../../utils/formatPrice";
import { v4 as uuid } from "uuid";
import Button from "../../components/common/Button";
import { HiOutlineMinus, HiPlus } from "react-icons/hi2";

const ProductDetail = () => {
  const { id } = useParams();
  const { data, error, isPending } = useGetDetails(Number(id));

  if (isPending) {
    return <p>Loading...</p>;
  }

  console.log("Object.keys(data.sizes).length", Object.keys(data.sizes).length);

  return (
    <DetailContainer>
      <InfoArea>
        <p>₩ {formatPrice(data.price)}</p>
        <h3>{data.name}</h3>
        <h6>DETAILS</h6>
        <p>{data.description}</p>
        <p>Material: {data.material}</p>
        <p>Color: {data.color}</p>
      </InfoArea>
      <ImageArea>
        {data.photos.map((photo) => {
          return (
            <div key={uuid()}>
              <img src={photo} alt={photo} />
            </div>
          );
        })}
      </ImageArea>
      <CheckoutArea>
        <CheckoutWrap>
          <TitleWrap>
            <p>SIZE</p>
            <p>Size Chart</p>
          </TitleWrap>
          <SizeWrap sizeLength={Object.keys(data.sizes).length}>
            {Object.entries(data.sizes).map(([key, value]) => {
              return <Button content={key} key={uuid()} disabled={!value}></Button>;
            })}
          </SizeWrap>
          <CountBox>
            <Icon>
              <HiOutlineMinus />
            </Icon>
            <p>0</p>
            <Icon>
              <HiPlus />
            </Icon>
          </CountBox>
          <AddToCartButton>
            <p>ADD TO CART</p>
            <p>₩ {formatPrice(data.price)}</p>
          </AddToCartButton>
          <span>Free domestic (US) shipping on orders over $400 USD</span>
        </CheckoutWrap>
      </CheckoutArea>
    </DetailContainer>
  );
};

const DetailContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 372px 1fr 372px;
  gap: 1rem;
  margin: 158px auto 100px;
  padding: 0 20px;
  box-sizing: border-box;
`;

const InfoArea = styled.div`
  width: 100%;
  height: calc(100vh - 158px);
  position: sticky;
  top: 158px;
  padding-right: 2.5rem;
  box-sizing: border-box;
  h3 {
    margin-bottom: 2.5rem;
    font-size: 22px;
    line-height: 1.625rem;
    font-weight: 300;
  }
  p,
  h6 {
    font-size: 14px;
    margin: 0 0 8px;
    line-height: 1.25rem;
  }
`;

const ImageArea = styled.div`
  width: 100%;
  object-fit: contain;
  display: flex;
  flex-direction: column;
  img {
    width: 100%;
  }
`;

const CheckoutArea = styled.div`
  width: 100%;
  height: calc(100vh - 158px);
  position: sticky;
  top: 158px;
  line-height: 1.625rem;
  span {
    width: 100%;
    display: inline-block;
    font-size: 12px;
    text-align: right;
    margin: 0 0 10px;
  }
`;

const CheckoutWrap = styled.div`
  max-width: 349px;
  float: right;
`;

const TitleWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  margin: 0 0 0.5rem;
`;

const SizeWrap = styled.div<{ sizeLength: number }>`
  width: 100%;
  display: grid;
  grid-template-columns: ${({ sizeLength }) => `repeat(${sizeLength}, 1fr)`};
  margin-bottom: 1.25rem;
  gap: 0.3rem;
  button {
    margin: 0;
  }
`;

const CountBox = styled.div`
  width: 100%;
  height: 60px;
  border-radius: 0.375rem;
  border: 1px solid var(--color-black);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.25rem;
  box-sizing: border-box;
  margin-bottom: 0.5rem;
`;

const Icon = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  svg {
    margin: 0.25rem;
  }
  :hover {
    background-color: var(--color-point);
  }
`;

const AddToCartButton = styled.button`
  width: 100%;
  height: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.375rem;
  background-color: var(--color-point);
  border: none;
  padding: 0 18px;
  font-size: 14px;
  cursor: pointer;
  margin-bottom: 1.25rem;
  :hover {
    background-color: var(--color-black);
    color: var(--color-white);
  }
`;

export default ProductDetail;
