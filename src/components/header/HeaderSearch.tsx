import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { goTo } from "../../utils/goTo";
import { useNavigate } from "react-router-dom";
import Button from "../common/Button";

const HeaderSearch = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const navigate = useNavigate();

  const handleOpenSearch = () => {
    setIsSearchVisible(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    goTo(navigate, `/products?query=${searchValue}`);
  };

  return (
    <SearchContainer isSearchVisible={isSearchVisible}>
      <span onClick={handleOpenSearch}>SEARCH</span>
      {isSearchVisible ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="TYPE HERE"
            value={searchValue}
            onChange={(event) => {
              setSearchValue(event.target.value);
            }}
          />
          <Button
            content="X"
            onClick={() => {
              setIsSearchVisible(false);
            }}
            bg="point"
            bgHover="black"
          />
        </form>
      ) : null}
    </SearchContainer>
  );
};

const SearchContainer = styled.div<{ isSearchVisible: boolean }>`
  display: flex;
  height: 38px;
  box-sizing: border-box;
  align-items: center;
  background-color: var(--color-lightgray);
  padding: 4px;
  padding-right: ${({ isSearchVisible }) => (isSearchVisible ? "0.5rem" : "")};
  margin-left: 6px;
  border-radius: 0.375rem;
  display: flex;
  input[type="text"] {
    border: 1px dashed var(--color-black);
    border-radius: 0.2rem;
    padding-right: 10px;
    :focus {
      outline: none;
    }
  }
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background-color: var(--color-lightgray);
    padding: 0 0.75rem;
    margin: 0 0.25rem;
    font-size: 14px;
    height: 30px;
    border-radius: 6px;
    line-height: 1.25rem;
    text-transform: uppercase;
    outline: none;
    border: 1px solid var(--color-lightgray);
    cursor: pointer;
    white-space: nowrap;
    :hover {
      background-color: var(--color-point);
      border: 1px solid var(--color-point);
    }
  }
  button {
    height: auto;
    margin: 0 0 0 0.3rem;
  }
`;

export default HeaderSearch;
