import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

type Props = {};

const SkeletonAddress = (props: Props) => {
  return (
    <SkeletonInfoWrap>
      <h5>YOUR ADDRESS</h5>
      <div>
        <p>Name :</p>
        <p className="skeleton"></p>
      </div>
      <div>
        <p>Address :</p>
        <p className="skeleton"></p>
      </div>
      <div>
        <p>City :</p>
        <p className="skeleton"></p>
      </div>
      <div>
        <p>Country :</p>
        <p className="skeleton"></p>
      </div>
      <div>
        <p>Email :</p>
        <p className="skeleton"></p>
      </div>
      <div>
        <p>Phone :</p>
        <p className="skeleton"></p>
      </div>
      <div>
        <p>Zipcode :</p>
        <p className="skeleton"></p>
      </div>
    </SkeletonInfoWrap>
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

const SkeletonInfoWrap = styled.div`
  padding: 16px;
  font-size: 14px;
  height: auto;
  p {
    margin: 4px 0;
  }
  div {
    display: flex;
    justify-content: space-between;
  }
  .skeleton {
    width: 20%;
    height: 1rem;
    background-color: var(--color-lightgray);
    border-radius: 0.375rem;
    animation: ${pulse} 1.5s infinite ease-in-out;
  }
`;

export default SkeletonAddress;
