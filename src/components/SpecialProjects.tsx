import styled from "@emotion/styled";

const SpecialProjects = () => {
  return (
    <SpecialContainer>
      <h2>Special Projects</h2>
      <ItemWrap>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </ItemWrap>
    </SpecialContainer>
  );
};

const SpecialContainer = styled.div`
  text-transform: uppercase;
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
  div {
    background-color: var(--color-point);
    height: 30vw;
    border-radius: 0.375rem;
  }
`;

export default SpecialProjects;
