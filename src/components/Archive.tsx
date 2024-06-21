import styled from "@emotion/styled";
import Button from "./common/Button";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { css, keyframes } from "@emotion/react";

const archiveData = [
  {
    photo: "/archive/archive_01.webp",
    title: "BRAIN DEAD X ALTERIOR",
    date: "Thu, May 30, 24",
  },
  {
    photo: "/archive/archive_02.webp",
    title: "BRAIN DEAD EQUIPMENT: CLIMBING D1",
    date: "Mon, May 27, 24",
  },
  {
    photo: "/archive/archive_03.webp",
    title: "BRAIN DEAD X THE BIG LEBOWSKI",
    date: "Thu, May 23, 24",
  },
  {
    photo: "/archive/archive_04.webp",
    title: "BRAIN DEAD TYPE 00 DENIM: DROP 3",
    date: "Thu, May 16, 24",
  },
  {
    photo: "/archive/archive_05.webp",
    title: "BRAIN DEAD X PEEP MAGAZINE",
    date: "Thu, May 09, 24",
  },
  {
    photo: "/archive/archive_06.webp",
    title: "BRAIN DEAD X CLARKS ORIGINALS",
    date: "Mon, May 06, 24",
  },
  {
    photo: "/archive/archive_07.webp",
    title: `BRAIN DEAD X HOMESHAKE: "HORSIE" VINYL RELEASE`,
    date: "Thu, Apr 30, 24",
  },
  {
    photo: "/archive/archive_08.webp",
    title: "BRAIN DEAD SUMMER 24",
    date: "Fri, May 26, 24",
  },
];

const Archive = () => {
  const [isGird, setIsGird] = useState<boolean>(true);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
  return (
    <ArchiveContainer>
      <h2>Archive</h2>
      <p>BRAIN DEAD IS A CREATIVE COLLECTIVE OF ARTISTS AND DESIGNERS FROM AROUND THE WORLD. WITH ITS DISRUPTIVE, GRAPHIC-LED APPROACH, THE BRAND TAKES ITS CUES FROM POST PUNK, UNDERGROUND COMICS, SKATEBOARDING, AND THE SPIRIT OF SUBCULTURE AS A WHOLE. BRAIN DEAD IS NOT ONE PERSON, NOR IS IT ONE IDEA. IT SITS IN THE SPACE BETWEEN PEOPLE.</p>
      <div>
        <ButtonWrap>
          <LeftArea>
            <p>FILTERS</p>
            <Button content="all" bg="point" />
          </LeftArea>
          <RightArea className="right">
            <Button
              content="list"
              active={!isGird}
              onClick={() => {
                setIsGird(false);
              }}
            />
            <Button
              content="grid"
              active={isGird}
              onClick={() => {
                setIsGird(true);
              }}
            />
          </RightArea>
        </ButtonWrap>
        {isGird ? (
          <ItemWrapGrid>
            {archiveData.map((item, index) => {
              return (
                <GridItemBox key={uuid()} onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave} isHovered={hoveredIndex === index}>
                  <div>
                    <span>{item.date}</span>
                    <img src={item.photo} alt="" />
                  </div>
                  <p>{item.title}</p>
                </GridItemBox>
              );
            })}
          </ItemWrapGrid>
        ) : (
          <ItemWrapList>
            {archiveData.map((item, index) => {
              return (
                <ListItemBox key={uuid()} onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave} isHovered={hoveredIndex === index}>
                  <div>
                    <p>{item.title}</p>
                  </div>
                  <div>
                    <span>{item.date}</span>
                    <Button content="read" />
                  </div>
                </ListItemBox>
              );
            })}
          </ItemWrapList>
        )}
      </div>
    </ArchiveContainer>
  );
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const ArchiveContainer = styled.div`
  text-transform: uppercase;
  padding: 1.5rem 1.25rem;
  h2 {
    font-size: 22px;
    margin-bottom: 1rem;
  }
  p {
    width: 100%;
    font-size: 54px;
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4rem;
  margin-bottom: 1.25rem;
`;

const LeftArea = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  p {
    font-size: 14px;
    margin-bottom: 5px;
  }
`;

const RightArea = styled.div`
  display: flex;
`;

const ItemWrapGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
`;

const ItemWrapList = styled.div`
  display: flex;
  flex-direction: column;
  /* padding: 0.5rem 0; */
`;

const GridItemBox = styled.div<{ isHovered: boolean }>`
  width: 100%;
  object-fit: cover;
  cursor: pointer;
  div {
    position: relative;
    margin-bottom: 0.625rem;
    img {
      width: 100%;
      border-radius: 0.375rem;
    }
    span {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 30px;
      cursor: pointer;
      white-space: nowrap;
      border-radius: 6px;
      border-color: var(--color-black);
      color: var(--color-white);
      opacity: ${({ isHovered }) => (isHovered ? "1" : "0")};
      padding-left: 0.75rem;
      padding-right: 0.75rem;
      top: 0.625rem;
      left: 0.625rem;
      font-size: 0.875rem;
      backdrop-filter: blur(10px) brightness(80%);
      ${({ isHovered }) =>
        isHovered &&
        css`
          animation: ${fadeIn} 0.2s ease-in-out;
        `}
    }
  }
  p {
    font-size: 14px;
    min-height: 5rem;
  }
`;

const ListItemBox = styled.div<{ isHovered: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  cursor: pointer;
  border-bottom: 1px solid var(--color-black);
  p {
    font-size: 14px;
  }
  div {
    display: flex;
    gap: 0.5rem;
    span {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 30px;
      cursor: pointer;
      white-space: nowrap;
      border-radius: 6px;
      border-color: var(--color-black);
      color: var(--color-white);
      opacity: ${({ isHovered }) => (isHovered ? "1" : "0")};
      padding-left: 0.75rem;
      padding-right: 0.75rem;
      top: 0.625rem;
      left: 0.625rem;
      font-size: 0.875rem;
      backdrop-filter: blur(10px) brightness(80%);
      ${({ isHovered }) =>
        isHovered &&
        css`
          animation: ${fadeIn} 0.2s ease-in-out;
        `}
    }
    button {
      margin: 0;
      opacity: ${({ isHovered }) => (isHovered ? "1" : "0")};
      backdrop-filter: blur(10px) brightness(80%);
      ${({ isHovered }) =>
        isHovered &&
        css`
          animation: ${fadeIn} 0.2s ease-in-out;
        `}
    }
  }
`;

export default Archive;
