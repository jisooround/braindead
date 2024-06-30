import styled from "@emotion/styled";
import useGetUserMe from "../../hooks/useGetUserMe";
import Button from "../../components/common/Button";
import { useState } from "react";
import { formatPrice } from "../../utils/formatPrice";
import useAddPoint from "../../hooks/useAddPoint";
import SkeletonPoint from "../../components/account/SkeletonPoint";

const Point = () => {
  const { isPending, error, data: userAddressData } = useGetUserMe();
  const [rechargePoint, setRechargePoint] = useState<string>("");
  const { mutate: userPointAdd } = useAddPoint();

  const handleChange = (event) => {
    let price = event.target.value;
    price = Number(price.replaceAll(",", ""));
    if (isNaN(price)) {
      return;
    } else {
      setRechargePoint(formatPrice(price));
    }
  };

  const rechargeSubmitHanldeler = () => {
    let price = rechargePoint.replaceAll(",", "");
    userPointAdd({ add: Number(price) });
    setRechargePoint("");
  };

  // if (isPending) return <p>Loading...</p>;

  return (
    <PointContainer>
      <>
        <h2>My Point</h2>
        {isPending ? (
          <SkeletonPoint />
        ) : (
          <PointArea>
            <h5>YOUR POINT</h5>
            <div>
              <p>{formatPrice(userAddressData?.point)} point</p>
            </div>
          </PointArea>
        )}
        <PointArea>
          <h5>Recharge Points</h5>
          <form onSubmit={rechargeSubmitHanldeler}>
            <InputWrap>
              <input type="text" placeholder="0" name="point" value={rechargePoint} onChange={handleChange} />
              <label htmlFor="point">point</label>
            </InputWrap>
            <Button disabled={isPending} type="submit" content="Recharge" size="lg" bg="point" bgHover="black" />
          </form>
        </PointArea>
      </>
    </PointContainer>
  );
};

const PointContainer = styled.div`
  max-width: 460px;
  height: calc(100vh - 158px);
  margin: 158px auto 0;
  h2 {
    width: auto;
    font-size: 22px;
    text-align: center;
    margin: auto;
    margin-bottom: 32px;
    text-transform: uppercase;
  }
  h5 {
    font-weight: normal;
    font-size: 14px;
    margin-bottom: 16px;
  }
`;

const PointArea = styled.div`
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
      font-size: 22px;
      text-align: right;
      font-weight: 500;
    }
  }
  button {
    width: 100%;
    font-size: 16px;
    margin: 1rem 0 0 0;
  }
`;

const InputWrap = styled.div`
  position: relative;
  input[type="text"] {
    width: 100%;
    min-height: 65px;
    padding: 0 20px;
    background-color: transparent;
    border: 1px dashed var(--color-black);
    box-sizing: border-box;
    border-radius: 0.375rem;
    :hover {
      border: 1px solid var(--color-black);
    }
    :focus {
      outline: none;
    }
  }
  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
  label {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 16px;
    font-size: 14px;
    font-weight: 500;
  }
`;

export default Point;
