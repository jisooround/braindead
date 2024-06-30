import styled from "@emotion/styled";
import Button from "../common/Button";
import { keyframes } from "@emotion/react";

const SkeletonOrders = () => {
  return (
    <>
      <SkeletonOrderBox>
        <SkeletonOrderWrap>
          <div>
            <p>ORDER ID</p>
            <p className="skeleton"></p>
          </div>
          <div>
            <p>TOTAL PRICE</p>
            <p className="skeleton"></p>
          </div>
          <div>
            <p>MEMO</p>
            <p className="skeleton"></p>
          </div>
        </SkeletonOrderWrap>
        <Button disabled={true} content="view" size="sm" bg="point" bgHover="black" />
      </SkeletonOrderBox>
      <SkeletonOrderBox>
        <SkeletonOrderWrap>
          <div>
            <p>ORDER ID</p>
            <p className="skeleton"></p>
          </div>
          <div>
            <p>TOTAL PRICE</p>
            <p className="skeleton"></p>
          </div>
          <div>
            <p>MEMO</p>
            <p className="skeleton"></p>
          </div>
        </SkeletonOrderWrap>
        <Button disabled={true} content="view" size="sm" bg="point" bgHover="black" />
      </SkeletonOrderBox>
      <SkeletonOrderBox>
        <SkeletonOrderWrap>
          <div>
            <p>ORDER ID</p>
            <p className="skeleton"></p>
          </div>
          <div>
            <p>TOTAL PRICE</p>
            <p className="skeleton"></p>
          </div>
          <div>
            <p>MEMO</p>
            <p className="skeleton"></p>
          </div>
        </SkeletonOrderWrap>
        <Button disabled={true} content="view" size="sm" bg="point" bgHover="black" />
      </SkeletonOrderBox>
    </>
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

const SkeletonOrderBox = styled.div`
  width: 100%;
  border: 1px dashed var(--color-black);
  border-radius: 0.375rem;
  padding: 16px;
  margin-bottom: 16px;
  button {
    width: 100%;
    margin: 0.5rem 0 0 0;
  }
`;

const SkeletonOrderWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 4px;
    .skeleton {
      width: 25%;
      height: 10px;
      margin-bottom: 4px;
      border-radius: 0.375rem;
      background-color: var(--color-lightgray);
      animation: ${pulse} 1.5s infinite ease-in-out;
    }
  }
`;

export default SkeletonOrders;
