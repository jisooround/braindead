import styled from "@emotion/styled";
import { v4 as uuid } from "uuid";
import Button from "../components/common/Button";

interface Store {
  name: string;
  address: string[];
  days: string;
  hours: string[];
  button_name: string;
  path: string;
  photo: string;
}

const storesList: Store[] = [
  {
    name: "BRAIN DEAD STUDIOS FAIRFAX",
    address: ["611 N Fairfax Ave", "Los Angeles, CA 90036", "United States"],
    days: "Hours: Monday to Sunday",
    hours: ["Showroom: 12pm to 8pm", "Heavy Head Coffee: 9am to 5pm"],
    button_name: "BRAIN DEAD STUDIOS",
    path: "/#",
    photo: "/stores/stores_01.webp",
  },
  {
    name: "BRAIN DEAD FABRICATIONS",
    address: ["3819 Sunset Blvd", "Los Angeles, CA", "90026 United States"],
    days: "Monday to Saturday",
    hours: ["Hours: 11am to 7pm", "Hours: 11am to 7pm"],
    button_name: "SEE LOCATION",
    path: "/#",
    photo: "/stores/stores_02.webp",
  },
  {
    name: "BRAIN DEAD STUDIOS HARAJUKU",
    address: ["4 Chome-29-8 Jingumae", "Shibuya City, Tokyo", "150-000", "Japan"],
    days: "Thursday to Tuesday",
    hours: ["Hours: 11am to 8pm", "Closed Wednesday"],
    button_name: "SEE LOCATION",
    path: "/#",
    photo: "/stores/stores_03.webp",
  },
  {
    name: "DOVER STREET MARKET NEW YORK",
    address: ["160 Lexington Ave", "New York, NY 1001", "United States"],
    days: "Monday to Saturday",
    hours: ["Hours: 11am to 6pm", "Sunday: 12pm to 5pm"],
    button_name: "SEE LOCATION",
    path: "/#",
    photo: "/stores/stores_04.webp",
  },
  {
    name: "DOVER STREET MARKET LOS ANGELES",
    address: ["160 Lexington Ave", "New York, NY 1001", "United States"],
    days: "Monday to Saturday",
    hours: ["Hours: 11am to 6pm", "Sunday: 12pm to 5pm"],
    button_name: "SEE LOCATION",
    path: "/#",
    photo: "/stores/stores_05.webp",
  },
  {
    name: "DOVER STREET MARKET GINZA",
    address: ["160 Lexington Ave", "New York, NY 1001", "United States"],
    days: "Monday to Saturday",
    hours: ["Hours: 11am to 6pm", "Sunday: 12pm to 5pm"],
    button_name: "SEE LOCATION",
    path: "/#",
    photo: "/stores/stores_06.webp",
  },
  {
    name: "DOVER STREET MARKET LONDON",
    address: ["160 Lexington Ave", "New York, NY 1001", "United States"],
    days: "Monday to Saturday",
    hours: ["Hours: 11am to 6pm", "Sunday: 12pm to 5pm"],
    button_name: "SEE LOCATION",
    path: "/#",
    photo: "/stores/stores_07.webp",
  },
];

const Stores = () => {
  return (
    <StoresContainer>
      <h1>STORES</h1>
      {storesList.map((store, index) => {
        return (
          <StoreBox key={uuid()}>
            {index % 2 === 0 ? (
              <>
                <InfoArea>
                  <InfoWrap>
                    <h3>{store.name}</h3>
                    <div>
                      {store.address.map((address) => {
                        return <p key={uuid()}>{address}</p>;
                      })}
                      -<p>{store.days}</p>
                      {store.hours.map((hour) => {
                        return <p key={uuid()}>{hour}</p>;
                      })}
                    </div>
                    <Button content={store.button_name} size="sm" />
                  </InfoWrap>
                </InfoArea>
                <ImgArea>
                  <img src={store.photo} alt="" />
                  {/* <ImageComponent src={store.photo} alt={store.name} /> */}
                </ImgArea>
              </>
            ) : (
              <>
                <ImgArea>
                  <img src={store.photo} alt="" />
                  {/* <ImageComponent src={store.photo} alt={store.name} /> */}
                </ImgArea>
                <InfoArea>
                  <InfoWrap>
                    <h3>{store.name}</h3>
                    <div>
                      {store.address.map((address) => {
                        return <p key={uuid()}>{address}</p>;
                      })}
                      -<p>{store.days}</p>
                      {store.hours.map((hour) => {
                        return <p key={uuid()}>{hour}</p>;
                      })}
                    </div>
                    <Button content={store.button_name} size="sm" />
                  </InfoWrap>
                </InfoArea>
              </>
            )}
          </StoreBox>
        );
      })}
    </StoresContainer>
  );
};

const StoresContainer = styled.div`
  width: 100%;
  height: auto;
  /* height: calc(100vh - 153px); */
  margin: 153px auto 0;
  h1 {
    font-size: 54px;
    padding: 48px 0 80px 0;
    width: 100%;
    text-align: center;
  }
`;

const StoreBox = styled.div`
  width: 100%;
  min-height: 700px;
  padding: 0.315rem 0.625rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  box-sizing: border-box;
  gap: 0.625rem;
`;

const InfoArea = styled.div`
  width: 100%;
  display: flex;
  flex: 1 1 0%;
`;

const InfoWrap = styled.div`
  display: flex;
  padding: 29px;
  box-sizing: border-box;
  flex-direction: column;
  h3 {
    max-width: 70%;
    font-size: 22px;
    margin-bottom: 2rem;
  }
  p {
    font-size: 14px;
    display: flex;
    align-items: center;
    height: 20px;
  }
  button {
    margin-top: 1rem;
    width: fit-content;
  }
`;

const ImgArea = styled.div`
  overflow: hidden;
  object-fit: contain;
  img {
    width: 100%;
    border-radius: 0.375rem;
  }
`;

export default Stores;
