import styled from "@emotion/styled";
import { goTo } from "../../utils/goTo";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
type Props = {
  setIsOpenMenu: React.Dispatch<React.SetStateAction<number>>;
};

const LaptopSearch = ({ setIsOpenMenu }: Props) => {
  const [searchValue, setSearchValue] = useState<string | null>("");
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    goTo(navigate, `/products?query=${searchValue}`);
  };
  return (
    <SearchContainer>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="TYPE HERE"
          value={searchValue}
          onChange={(event) => {
            setSearchValue(event.target.value);
          }}
        />
      </form>
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
  width: 100%;
  padding: 1rem 1.25rem;
  box-sizing: border-box;
  input {
    width: 100%;
    min-height: 58px;
    outline: none;
    padding: 0.5rem;
    box-sizing: border-box;
    border: none;
    background-color: transparent;
    border-bottom: 1px dashed var(--color-black);
    ::placeholder {
      color: var(--color-black);
    }
    &:hover {
      border-bottom: 1px solid var(--color-black);
    }
  }
`;

export default LaptopSearch;
