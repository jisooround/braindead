import styled from "@emotion/styled";

type Props = {};

const SkeletonProductsList = (props: Props) => {
  return (
    <SkeletonContainer>
      <ItemListWrap>
        <ItemBox></ItemBox>
        <ItemBox></ItemBox>
        <ItemBox></ItemBox>
        <ItemBox></ItemBox>
        <ItemBox></ItemBox>
        <ItemBox></ItemBox>
      </ItemListWrap>
    </SkeletonContainer>
  );
};

const SkeletonContainer = styled.div``;

const ItemListWrap = styled.div`
  padding: 1.25rem;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;
`;

const ItemBox = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 3.5 / 4;
  border-radius: 0.375rem;
  background-color: var(--color-lightgray);
  animation: pulse 1.5s infinite ease-in-out;

  @keyframes pulse {
    0% {
      background-color: #e0e0e0;
    }
    50% {
      background-color: #f0f0f0;
    }
    100% {
      background-color: #e0e0e0;
    }
  }
`;
export default SkeletonProductsList;
