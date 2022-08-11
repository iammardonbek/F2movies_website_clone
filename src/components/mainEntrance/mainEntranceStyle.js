import styled from "styled-components";
import { ReactComponent as search } from "../../assets/icons/search.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
  > img {
    width: 70px;
    height: 70px;
  }
  > h1 {
    margin: 25px 0 8px;
    color: #f8f9fa;
    font-family: Arial, Helvetica, sans-serif;
  }
`;
export const SearchBar = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  border-radius: 5px;
  overflow: hidden;
  img {
    width: 30px;
    height: 30px;
    background: var(--greenColor);
  }
  input {
    border: none;
    outline: none;
    height: 100%;
    background: #f8f9fa;
    padding: 0 20px;
    width: 100%;
    font-size: 16px;
  }
`;
export const Search = styled(search)`
  width: 25px;
`;

export const Text = styled.div`
  color: #ced4da;
  margin-top: 30px;
  h5 {
    font-size: 22px;
    margin-bottom: 8px;
    font-family: Arial, Helvetica, sans-serif;
  }
  p {
    margin-bottom: 15px;
    font-size: 18px;
  }
`;
