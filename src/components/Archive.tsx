import styled from "@emotion/styled";
import Button from "./common/Button";

const Archive = () => {
  return (
    <ArchiveContainer>
      <h2>Archive</h2>
      <p>BRAIN DEAD IS A CREATIVE COLLECTIVE OF ARTISTS AND DESIGNERS FROM AROUND THE WORLD. WITH ITS DISRUPTIVE, GRAPHIC-LED APPROACH, THE BRAND TAKES ITS CUES FROM POST PUNK, UNDERGROUND COMICS, SKATEBOARDING, AND THE SPIRIT OF SUBCULTURE AS A WHOLE. BRAIN DEAD IS NOT ONE PERSON, NOR IS IT ONE IDEA. IT SITS IN THE SPACE BETWEEN PEOPLE.</p>
      <div>
        <div className="btn-wrap">
          <div className="left">
            <p>FILTERS</p>
            <Button content="all" />
          </div>
          <div className="right">
            <Button content="list" />
            <Button content="grid" />
          </div>
          <ItemWrap>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
          </ItemWrap>
        </div>
      </div>
    </ArchiveContainer>
  );
};

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

const ItemWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
`;
export default Archive;
