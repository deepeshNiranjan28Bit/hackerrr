import styled from "styled-components";

export const SearchInput = styled.input`
  display: block;
  font-family: "Roboto", sans-serif;
  width: 200px;
  margin: auto;
  margin-bottom: 8px;
  outline: none;
  padding: 13px 15px;
  border: 1px solid #dbdbdb;
  box-shadow: 0px 0px 10px 0px rgba(219, 219, 219, 0.5);
  font-size: 14px;
  border-radius: 12px;
  color: #8d8d8d;

  &::placeholder {
    font-weight: 300;
    color: #8d8d8d;
  }
`;

export const HeadlineWrapper = styled.div`
  text-align: center;
  margin-top: 25vh;
  font-size: 1.4rem;
  color: #64c9cf;

  h1 {
    font-family: "Montserrat", sans-serif;
  }
  h4 {
    font-family: "Merriweather", serif;
  }
  span {
    color: #b5eaea;
  }
`;

export const SearchButtonWrapper = styled.div`
  text-align: center;
  margin-bottom: 35px;

  button {
    color: #fff;
    background-color: #64c9cf;
    margin: auto;
    padding: 10px 50px;
    font-size: 15px;
    border: none;
    outline: none;
    border-radius: 12px;
    &:hover {
      cursor: pointer;
    }
  }
`;
