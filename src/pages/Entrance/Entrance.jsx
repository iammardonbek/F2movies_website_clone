import React from "react";
import Navbar from "../../components/common/Navbar/Navbar";
import { Container } from "../.././style";
import MainEntrance from "../../components/mainEntrance/mainEntrance";

const Entrance = () => {
  return (
    <div className="allFather">
      <Navbar />
      <Container className="max-width">
        <MainEntrance />
      </Container>
    </div>
  );
};

export default Entrance;
