import React from "react";
import { Container, Search, SearchBar } from "./mainEntranceStyle";
import Logo from "../../assets/images/logo.png";
import Button from "../common/Button/Button";
import ArrowRight from "../../assets/icons/arrowRIght.png";

import { useNavigate } from "react-router-dom";
import Socials from "../common/Socials/Socials";

const MainEntrance = () => {
  const navigate = useNavigate();
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
      <Socials />
      <div className="button">
        <Button onClick={() => navigate("/home")} width={"190px"}>
          <strong>view full site</strong>
          <img src={ArrowRight} alt="arrow" />
        </Button>
      </div>
    </Container>
  );
};

export default MainEntrance;
