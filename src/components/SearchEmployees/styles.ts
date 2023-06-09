import styled from "styled-components";
import searchIcon from "assets/images/searchIcon.png";

export const Search = styled.input`
  width: 20%;
  height: 40px;
  padding: 10px;
  background-image: url(${searchIcon});
  background-repeat: no-repeat;
  background-position: 95% center;
  border: 1px solid #cdcdcd;
  font-size: 16px;
  font-weight: 400;
  border-radius: 4px;
  &:focus-visible {
    border: 1px solid #cdcdcd;
    outline: none;
  }
  &::-webkit-search-cancel-button,
  ::-webkit-search-decoration,
  ::-webkit-search-results-button,
  ::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }
`;
