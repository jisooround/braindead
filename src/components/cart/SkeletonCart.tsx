import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import Button from "../common/Button";

type Props = {};

const SkeletonCart = (props: Props) => {
  return (
    <SkeletonCartContainer>
      <div>
        <SkeletonCartItemBox>
          <SkeletonCartItemImageArea>
            <div className="image"></div>
          </SkeletonCartItemImageArea>
          <SkeletonItemInfoArea>
            <p className="name"></p>
            <p className="name"></p>
            <p className="size"></p>
            <p className="price"></p>
          </SkeletonItemInfoArea>
          <div className="delete-icon" />
          <SkeletonQuantityArea></SkeletonQuantityArea>
        </SkeletonCartItemBox>
      </div>
      <div>
        <SkeletonBasicBox>
          <p className="summary"></p>
        </SkeletonBasicBox>
        <SkeletonBasicBox>
          <p className="subtotal"></p>
        </SkeletonBasicBox>
        <SkeletonBasicBox>
          <p className="add-note"></p>
        </SkeletonBasicBox>
      </div>
      <ButtonWrap>
        <Button content={`check out`} size="lg" bg="point" bgHover="black" colorHover="white" />
        <Button content="CONTINUE SHOPPING" size="lg" bg="lightgray" bgHover="point" />
      </ButtonWrap>
    </SkeletonCartContainer>
  );
};

const pulse = keyframes`
  0% {
    background-color: #e0e0e0;
  }
  50% {
    background-color: #f0f0f0;
  }
  100% {
    background-color: #e0e0e0;
  }
`;

const SkeletonCartContainer = styled.div`
  width: 100%;
  height: calc(100vh - 158px);
`;

const SkeletonCartItemBox = styled.div`
  height: 124px;
  padding: 1.25rem;
  border: 1px dashed var(--color-black);
  box-sizing: border-box;
  border-radius: 0.375rem;
  margin-bottom: 8px;
  display: flex;
  position: relative;
  p {
    font-size: 14px;
    line-height: 1.2rem;
  }
  .delete-icon {
    position: absolute;
    width: 18px;
    height: 18px;
    top: 20px;
    right: 20px;
    background-color: var(--color-lightgray);
    padding: 3px;
    border-radius: 50px;
    animation: ${pulse} 1.5s infinite ease-in-out;
  }
`;

const SkeletonCartItemImageArea = styled.div`
  max-width: 65px;
  height: auto;
  margin-right: 0.75rem;
  border-radius: 0.375rem;
  aspect-ratio: 3.5 / 4;
  background-color: var(--color-lightgray);
  animation: ${pulse} 1.5s infinite ease-in-out;
  div {
    width: 100%;
  }
`;

const SkeletonItemInfoArea = styled.div`
  width: 100%;
  p {
    background-color: var(--color-lightgray);
    animation: ${pulse} 1.5s infinite ease-in-out;
    height: 16px;
    margin-bottom: 4px;
    border-radius: 0.375rem;
  }
  .name {
    width: 70%;
  }
  .size {
    width: 30%;
  }
  .price {
    width: 35%;
  }
`;

const SkeletonQuantityArea = styled.div`
  position: absolute;
  width: 90px;
  height: 30px;
  bottom: 15px;
  right: 15px;
  background-color: var(--color-lightgray);
  padding: 0.3rem 0.5rem;
  border-radius: 0.375rem;
  box-sizing: border-box;
  animation: ${pulse} 1.5s infinite ease-in-out;
`;

const SkeletonBasicBox = styled.div`
  height: 70px;
  padding: 1.25rem;
  border: 1px dashed var(--color-black);
  box-sizing: border-box;
  border-radius: 0.375rem;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  p {
    width: 80px;
    height: 1rem;
    background-color: var(--color-lightgray);
    padding: 0.3rem 0.5rem;
    border-radius: 0.375rem;
    box-sizing: border-box;
    animation: ${pulse} 1.5s infinite ease-in-out;
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  gap: 0.5rem;
`;

export default SkeletonCart;
