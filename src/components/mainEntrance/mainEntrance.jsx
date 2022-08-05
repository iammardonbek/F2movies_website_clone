import React from "react";
import { Container, Search, SearchBar } from "./mainEntranceStyle";
import Logo from "../../assets/images/logo.png";
import Button from "../common/Button/Button";
import { Socials } from "./mainEntranceStyle";
import { ReactComponent as Facebook } from "../../assets/icons/facebook.svg";
import { Link } from "react-router-dom";

const MainEntrance = () => {
  return (
    <Container>
      <img src={Logo} alt="logo" />
      <h1>F2Movies</h1>
      <SearchBar>
        <input placeholder="Enter your keywords..." />
        <Button
          svg={<Search />}
          height={"100%"}
          borderRadius="0"
          width={"100px"}
        />
      </SearchBar>
      <Socials>
        <Link to="/">
          <Button
            width={"auto"}
            height={"auto"}
            type="social"
            borderRadius={"0"}
            bgColor="rgb(59, 89, 152)"
            fontColor={"black"}
            fontSize="14px"
            svg={<Facebook />}
            flexD
          >
            facebook
          </Button>
        </Link>
        <Link to="/">
          <Button
            width={"auto"}
            height={"auto"}
            type="social"
            borderRadius={"0"}
            bgColor="rgb(59, 89, 152)"
            fontColor={"black"}
            fontSize="14px"
            svg={<Facebook />}
            flexD
          >
            facebook
          </Button>
        </Link>
        <Link to="/">
          <Button
            width={"auto"}
            height={"auto"}
            type="social"
            borderRadius={"0"}
            bgColor="rgb(59, 89, 152)"
            fontColor={"black"}
            fontSize="14px"
            svg={<Facebook />}
            flexD
          >
            facebook
          </Button>
        </Link>
        <Link to="/">
          <Button
            width={"auto"}
            height={"auto"}
            type="social"
            borderRadius={"0"}
            bgColor="rgb(59, 89, 152)"
            fontColor={"black"}
            fontSize="14px"
            svg={<Facebook />}
            flexD
          >
            facebook
          </Button>
        </Link>
        <Link to="/">
          <Button
            width={"auto"}
            height={"auto"}
            type="social"
            borderRadius={"0"}
            bgColor="rgb(59, 89, 152)"
            fontColor={"black"}
            fontSize="14px"
            svg={<Facebook />}
            flexD
          >
            facebook
          </Button>
        </Link>
        <Link to="/">
          <Button
            width={"auto"}
            height={"auto"}
            type="social"
            borderRadius={"0"}
            bgColor="rgb(59, 89, 152)"
            fontColor={"black"}
            fontSize="14px"
            svg={<Facebook />}
            flexD
          >
            facebook
          </Button>
        </Link>
      </Socials>
    </Container>
  );
};

export default MainEntrance;
