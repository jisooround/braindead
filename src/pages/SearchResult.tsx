import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import styled from "@emotion/styled";
import Button from "../components/common/Button";
import ProductsList from "../components/products/ProductsList";
import { goTo } from "../utils/goTo";
import { useEffect, useState } from "react";
import useSearch from "../hooks/useSearch";
import { searchProducts } from "../api/api";

const SearchResult = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  // URLSearchParams를 객체로 변환
  const params = Object.fromEntries(searchParams.entries());

  const { data, error, isPending } = useSearch(params);

  useEffect(() => {
    setSearchValue(params.query || "");
  }, [searchParams]);

  if (isPending) return <p>Loading...</p>;

  const handleSubmit = (event) => {
    event.preventDefault();
    goTo(navigate, `/products?query=${searchValue}`);
  };

  return (
    <SearchResultContainer>
      <TitleWrap>
        <h1>Search Result</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={searchValue}
            onChange={(event) => {
              setSearchValue(event.target.value);
            }}
          />
          <Button content="🔍search" bg="point" bgHover="black" type="submit" />
        </form>
      </TitleWrap>
      <ResultItemWrap>
        <ProductsList listData={data} />
      </ResultItemWrap>
    </SearchResultContainer>
  );
};

const SearchResultContainer = styled.div`
  width: 100%;
`;

const TitleWrap = styled.div`
  max-width: 460px;
  margin: 158px auto 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  h1 {
    font-size: 54px;
    text-transform: uppercase;
  }
  form {
    width: 400px;
    display: grid;
    grid-template-columns: 8fr 2fr;
    margin-top: 20px;
    input[type="text"] {
      width: 100%;
      min-height: 65px;
      padding: 0 1rem;
      background-color: transparent;
      border: 1px dashed var(--color-black);
      box-sizing: border-box;
      border-radius: 0.375rem;
      :hover {
        border: 1px solid var(--color-black);
      }
      :focus {
        outline: none;
      }
    }
    button {
      height: 65px;
      margin: 0 0 0 0.5rem;
      padding: 0 1.125rem;
    }
  }
`;

const ResultItemWrap = styled.div``;

export default SearchResult;
