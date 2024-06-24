import styled from "@emotion/styled";
import useGetUserMe from "../../hooks/useGetUserMe";
import Button from "../../components/common/Button";

const Point = () => {
  const { isPending, error, data: userAddressData } = useGetUserMe();

  if (isPending) return <p>Loading...</p>;
  return (
    <PointContainer>
      <h2>My Point</h2>
      <PointArea>
        <h5>YOUR POINT</h5>
        <div>
          <p>{userAddressData?.point} point</p>
        </div>
      </PointArea>
      <PointArea>
        <h5>Recharge Points</h5>
        <div>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={userAddressData?.point}
            // onChange={(event) => handleChange(event)}
          />
          <Button
            content="Recharge"
            size="lg"
            bg="lightgray"
            bgHover="point"
            // onClick={() => {
            //   setIsEdit(true);
            // }}
          />
        </div>
      </PointArea>
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
    button {
      width: 100%;
      font-size: 16px;
      margin: 0;
    }
  }
  input[type="text"] {
    width: 100%;
    min-height: 65px;
    padding: 0 20px;
    margin-bottom: 1rem;
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
`;

const PointBox = styled.div``;

export default Point;
