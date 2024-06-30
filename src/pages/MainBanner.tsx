import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import Button from "../components/common/Button";
import Gradient from "../components/common/Gradient";
import { useMediaQuery } from "react-responsive";

interface Image {
  img_src: string;
}

interface Item {
  id: string;
  img_src: string;
}

interface BannerList {
  type: "single" | "multiple";
  shop: string;
  read: string;
  title: string;
  img: Image[];
  item: Item[];
}

const mainBannerList: BannerList[] = [
  {
    type: "single",
    title: "OAKLEY FACTORY TEAM",
    shop: "/collections/oakley-factory-team",
    read: "/pages/oakley-factory-team",
    img: [
      { img_src: "/Family_1080x1920_1.webp" },
      {
        img_src: "/Family_1920x1080_3.webp",
      },
    ],
    item: [{ id: "", img_src: "/Oakley_Factory_Team_Suede_Flesh_Caviar_Mesh_Side_optimized.webp" }],
  },
  {
    type: "multiple",
    title: "BRAIN DEAD X ALTERIOR",
    shop: "/collections/oakley-factory-team",
    read: "/pages/oakley-factory-team",
    img: [
      { img_src: "/G0A9434.jpg" },
      {
        img_src: "/G0A9428.jpg",
      },
    ],
    item: [{ id: "", img_src: "/Oakley_Factory_Team_Suede_Flesh_Caviar_Mesh_Side_optimized.webp" }],
  },
  {
    type: "multiple",
    title: "BRAIN DEAD EQUIPMENT: CLIMBING SD1",
    shop: "/collections/oakley-factory-team",
    read: "/pages/oakley-factory-team",
    img: [
      { img_src: "/20240525100249_33.webp" },
      {
        img_src: "/RC1006545.webp",
      },
    ],
    item: [{ id: "", img_src: "/Oakley_Factory_Team_Suede_Flesh_Caviar_Mesh_Side_optimized.webp" }],
  },
  {
    type: "multiple",
    title: "BRAIN DEAD X THE BIG LEBOWSKI",
    shop: "/collections/oakley-factory-team",
    read: "/pages/oakley-factory-team",
    img: [
      { img_src: "/Brain_Dead_x_The_Big_Lebowski_Pin_Head_T-shirt_White_Detail_Opt_8d8867e7-beba-4c99-b767-4eb76cb34b7b.webp" },
      {
        img_src: "/Brain_Dead_x_The_Big_Lebowski_Bathroom_Break_T-shirt_Natural_Detail_Opt_272acba3-a1fa-4a6c-aea6-f7240662e1e2.webp",
      },
    ],
    item: [{ id: "", img_src: "/Brain_Dead_x_The_Big_Lebowski_Pin_Head_T-shirt_White_Detail_Opt_8d8867e7-beba-4c99-b767-4eb76cb34b7b.webp" }],
  },
  {
    type: "multiple",
    title: "BRAIN DEAD TYPE 00 DENIM: DROP 3",
    shop: "/collections/oakley-factory-team",
    read: "/pages/oakley-factory-team",
    img: [
      { img_src: "/DSCF3977.jpg" },
      {
        img_src: "/DSCF3889_39304a6c-53c7-4ea6-b73a-42013bc24668.jpg",
      },
    ],
    item: [{ id: "", img_src: "/Oakley_Factory_Team_Suede_Flesh_Caviar_Mesh_Side_optimized.webp" }],
  },
];

const MainBanner = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1024px)",
  });
  return (
    <div>
      {mainBannerList.map((item, index) => {
        return (
          <MainBannerContainer key={index}>
            <Gradient />
            <InfoWrap className="info-wrap" isDeskTop={isDesktop}>
              <div className="btn-wrap">
                <Link to={item.shop}>
                  <Button content="shop"></Button>
                </Link>
                <Link to={item.read}>
                  <Button content="read"></Button>
                </Link>
              </div>
              <h3>{item.title}</h3>
            </InfoWrap>
            <div className="img-wrap">
              {item.type === "single" ? (
                <SingleImage>
                  <img src={item.img[0].img_src} alt={`${item.title}_image`} />
                </SingleImage>
              ) : (
                <MultipleImage isDeskTop={isDesktop}>
                  {isDesktop ? (
                    <MultipleImageWrap>
                      <ImageArea>
                        <img src={item.img[0].img_src} alt={`${item.title}_image`} />
                      </ImageArea>
                      <ImageArea>
                        <img src={item.img[1].img_src} alt={`${item.title}_image`} />
                      </ImageArea>
                    </MultipleImageWrap>
                  ) : (
                    <SingleImage>
                      <img src={item.img[0].img_src} alt={`${item.title}_image`} />
                    </SingleImage>
                  )}
                </MultipleImage>
              )}
            </div>
          </MainBannerContainer>
        );
      })}
    </div>
  );
};

const MainBannerContainer = styled.div`
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  position: relative;
`;

const InfoWrap = styled.div<{ isDeskTop: boolean }>`
  position: absolute;
  left: 20px;
  bottom: ${({ isDeskTop }) => (isDeskTop ? "24px" : "100px")};
  z-index: 100;
  h3 {
    font-size: 22px;
    margin-top: 16px;
    color: var(--color-white);
  }
`;

const SingleImage = styled.div`
  width: 100%;
  height: 100vh;
  object-fit: contain;
  overflow: hidden;
  position: relative;
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: translate(-50%, -50%);
  }
`;

const MultipleImage = styled.div<{ isDeskTop: boolean }>`
  width: 100%;
  height: 100vh;
`;

const MultipleImageWrap = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  object-fit: cover;
  overflow: hidden;
`;

const ImageArea = styled.div`
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  img {
    min-width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export default MainBanner;
