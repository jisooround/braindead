import styled from "@emotion/styled";

interface Essentials {
  title: string;
  img_src: string;
  shop_path: string;
}

const EssentialsList: Essentials[] = [
  {
    title: "summer 24",
    img_src: "/essentials/Summer_Campaign_3_opt_12714d62-b2c8-4b6f-afe7-5155aead9d1a.webp",
    shop_path: "/collections/summer-24",
  },
  {
    title: "spring 24",
    img_src: "/essentials/Spring_campaign_6_opt_abaad657-63b8-434e-84cb-d7243cfc05d5.webp",
    shop_path: "/collections/summer-24",
  },
  {
    title: "POTHECARY",
    img_src: "/essentials/ae_terraformer_shroom_04.webp",
    shop_path: "/collections/summer-24",
  },
  {
    title: "EYEWEAR",
    img_src: "/essentials/bd_fall23_ai_optimized_11_3185b5fa-11c2-478b-9a34-037a09af0a63.webp",
    shop_path: "/collections/summer-24",
  },
];
const Essentials = () => {
  return (
    <EssentialContainer>
      <h2>Essentials</h2>
      <ItemStyle>
        {EssentialsList.map((item, index) => {
          return (
            <div key={index}>
              <img src={item.img_src} alt="" />
            </div>
          );
        })}
      </ItemStyle>
    </EssentialContainer>
  );
};

const EssentialContainer = styled.div`
  padding: 24px 0;
  margin-top: 60px;
  margin-bottom: 80px;
  h2 {
    margin: 0 1.25rem 1.5rem 1.25rem;
    text-transform: uppercase;
    font-size: 54px;
  }
`;

const ItemStyle = styled.div`
  /* width: 65vw; */
  display: flex;
  width: 100%;
  div {
    max-width: 25%;
    height: 32vw;
    overflow: hidden;
    object-fit: contain;
    img {
      /* width: 100%; */
      height: 100%;
    }
  }
`;

export default Essentials;
