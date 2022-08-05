import { ReactComponent as Account } from "../../../assets/icons/account.svg";
import styled from "styled-components";

export const NavbarWrapper = styled.div`
  width: 100%;
  background-color: var(--headerColor);
  display: flex;
  justify-content: center;
`;
export const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  padding: 0 20px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
  .flex1 {
    flex: 1;
    display: flex;
    text-decoration: none;
    align-items: center;
    h2 {
      color: #f8f9fa;
      font-family: Arial, Helvetica, sans-serif;
      margin-left: 10px;
    }
  }
  .burger {
    display: none;
  }
  img {
    height: 40px;
  }
  nav {
    display: flex;
    list-style-type: none;
    user-select: none;
    li {
      padding: 10px;
      margin-left: 20px;
      text-transform: uppercase;
      font-size: 14px;
      font-family: Arial, Helvetica, sans-serif;
      a {
        font-weight: 600;
        text-decoration: none;
        color: #bbb;
        :hover {
          color: var(--greenColor);
        }
      }
    }
  }
`;

export const Login = styled.div`
  text-transform: capitalize;
  display: flex;
  color: #bbb;
  align-items: center;
  span {
    margin: 0 5px;
  }
  p {
    cursor: pointer;
  }
`;
export const User = styled(Account)`
  margin-right: 10px;
  margin-left: auto;
  border-radius: 50px;
`;
