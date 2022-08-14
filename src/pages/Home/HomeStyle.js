import styled from "styled-components";
import { ReactComponent as Search } from "../../assets/icons/search.svg";

export const HomeSearch = styled.div`
  height: 240px;
  width: 100%;
  background-color: var(--headerColor);
  padding: 0 20px;
  text-align: center;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: space-between;
  h1 {
    color: #e9ecef;
    font-family: var(--font);
    font-size: 40px;
    font-weight: 100;
  }
`;
export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
  bottom: -35px;
  height: 70px;
  gap: 10px;
`;
export const Input = styled.div`
  display: flex;
  align-items: center;
  background: white;
  overflow: hidden;
  border-radius: 50px;
  max-width: 980px;
  width: 100%;
  height: 100%;
  padding: 0 20px;
  input {
    height: 100%;
    width: 100%;
    font-size: 28px;
    border: none;
    outline: none;
    padding: 0 20px;
  }
`;
export const SearchIcon = styled(Search)`
  width: 30px;
  height: 30px;
`;
export const Intro = styled.p`
  margin-top: 80px;
  color: #ccc;
  font-weight: 400;
  font-size: 1.15em;
  line-height: 1.4em;
`;
export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(8, minmax(155px, auto));
  gap: 15px 5px;
  flex-wrap: wrap;
  @media (max-width: 1200px) {
    grid-template-columns: repeat(6, minmax(160px, auto));
  }
  @media (max-width: 992px) {
    grid-template-columns: repeat(4, minmax(160px, auto));
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(3, minmax(160px, auto));
  }
  @media (max-width: 640px) {
    grid-template-columns: repeat(2, minmax(160px, auto));
  }
  @media (max-width: 400px) {
    grid-template-columns: repeat(1, minmax(160px, auto));
  }
`;
export const Selector = styled.div`
  display: flex;
  margin: 20px 0 10px;
  gap: 10px;
`;
