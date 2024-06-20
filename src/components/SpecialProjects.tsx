import styled from "@emotion/styled";
import Gradient from "./common/Gradient";
import { useState } from "react";
import Button from "./common/Button";

interface Special {
  img_src: string;
  title: string;
  shop_path: string;
  discover_path: string;
}

const SpecialBannerList: Special[] = [
  { img_src: "/special/01.jpg", title: "OAKLEY FACTORY TEAM", shop_path: "/collections/oakley-factory-team", discover_path: "/pages/oakley-factory-team" },
  { img_src: "/special/02.webp", title: "ALL RISE FEST", shop_path: "/collections/oakley-factory-team", discover_path: "/pages/oakley-factory-team" },
  { img_src: "/special/03.webp", title: "BRAIN DEAD RECORDS", shop_path: "/collections/oakley-factory-team", discover_path: "/pages/oakley-factory-team" },
  { img_src: "/special/04.webp", title: "CLARKS X BRAIN DEAD", shop_path: "/collections/oakley-factory-team", discover_path: "/pages/oakley-factory-team" },
];

const SpecialProjects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <SpecialContainer>
      <h2>Special Projects</h2>
      <ItemWrap>
        {SpecialBannerList.map((item, index) => {
          return (
            <Item key={index} onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave}>
              {hoveredIndex === index && <Gradient transition={true} />}
              <InfoWrap isHovered={hoveredIndex === index}>
                <p>{item.title}</p>
                <div>
                  <Button content="shop" path={item.shop_path} />
                  <Button content="discover" path={item.discover_path} />
                </div>
              </InfoWrap>
              <img src={item.img_src} alt={item.title} />
            </Item>
          );
        })}
      </ItemWrap>
    </SpecialContainer>
  );
};

const SpecialContainer = styled.div`
  padding: 1.5rem 1.25rem;
  margin-top: 60px;
  margin-bottom: 80px;
  h2 {
    margin-bottom: 16px;
    text-transform: uppercase;
    font-size: 54px;
  }
`;

const ItemWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
`;

const Item = styled.div`
  width: 100%;
  background-color: aquamarine;
  height: 30vw;
  position: relative;
  border-radius: 0.375rem;
  overflow: hidden;
  cursor: pointer;
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

const InfoWrap = styled.div<{ isHovered: boolean }>`
  position: absolute;
  width: 100%;
  padding: 1.25rem;
  box-sizing: border-box;
  bottom: 0;
  display: ${({ isHovered }) => (isHovered ? "flex" : "none")};
  justify-content: space-between;
  z-index: 120;
  p {
    color: var(--color-white);
    font-size: 1.375rem;
    line-height: 1.625rem;
  }
`;

export default SpecialProjects;
