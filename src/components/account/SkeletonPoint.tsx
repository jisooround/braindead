import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

type Props = {};

const SkeletonPoint = (props: Props) => {
  return (
    <SkeletonPointArea>
      <h5>YOUR POINT</h5>
      <div>
        <p></p>
      </div>
    </SkeletonPointArea>
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

const SkeletonPointArea = styled.div`
  border: 1px dashed var(--color-black);
  border-radius: 0.375rem;
  box-sizing: border-box;
  padding: 16px;
  margin-bottom: 16px;
  font-size: 14px;
  height: auto;
  div {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-wrap: wrap;
    p {
      margin-top: 4px;
      width: 40%;
      height: 22px;
      text-align: right;
      background-color: var(--color-lightgray);
      animation: ${pulse} 1.5s infinite ease-in-out;
      border-radius: 0.375rem;
    }
  }
  button {
    width: 100%;
    font-size: 16px;
    margin: 1rem 0 0 0;
  }
`;

export default SkeletonPoint;
