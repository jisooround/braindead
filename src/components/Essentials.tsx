import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef, useState } from "react";

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
  {
    title: "summer 24",
    img_src: "/essentials/BD_Denim_Black_03_5e0614c3-0907-473c-9e2b-8926fccd13db.webp",
    shop_path: "/collections/summer-24",
  },
  {
    title: "EYEWEAR",
    img_src: "/essentials/110523_BrainDead_0367_729c9ebb-3da5-4e76-9159-f2af457cab8a.webp",
    shop_path: "/collections/summer-24",
  },
  {
    title: "spring 24",
    img_src: "/essentials/029_ALL_RISE_X_BRAIN_DEAD_TORONTO_FILM_QF29_by_AZUREE_HOLLOWAY_672d772f-e09f-4477-98fb-7847fd2d9ef8.webp",
    shop_path: "/collections/summer-24",
  },
  {
    title: "POTHECARY",
    img_src: "/essentials/Gel_Fresh_Glitter_1350x1080_7ed60518-4cd4-4fd3-a2ef-388175f81637.webp",
    shop_path: "/collections/summer-24",
  },
  {
    title: "POTHECARY",
    img_src: "/essentials/000028880018_01b5d98c-6abe-41a2-9e2f-de75c7bdedb0.webp",
    shop_path: "/collections/summer-24",
  },
];

const Essentials = () => {
  const slideRef = useRef<Slider | null>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    draggable: true,
    beforeChange: (newIndex: number) => {
      setCurrentSlide(newIndex);
    },
  };

  // useEffect(() => {
  //   if (slideRef.current) {
  //     console.log("Current slide index:", currentSlide);
  //   }
  // }, [currentSlide]);

  return (
    <EssentialContainer>
      <h2>Essentials</h2>
      <ItemStyle className="slider-container">
        <Slider {...settings} ref={slideRef}>
          {EssentialsList.map((item, index) => {
            return (
              <div className="slider-item" key={index}>
                <img src={item.img_src} alt="" />
              </div>
            );
          })}
        </Slider>
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
  &.slider-container {
    width: 100%;
    /* overflow: hidden; */
    .slick-slide {
      max-width: 25%;
      padding: 10px;
      box-sizing: border-box;
      .slider-item {
        width: 100%;
        height: 32vw;
        border-radius: 0.375rem;
        overflow: hidden;
        img {
          object-fit: cover;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`;

export default Essentials;
