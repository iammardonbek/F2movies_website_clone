import React from "react";
import Navbar from "../../components/common/Navbar/Navbar";
import { Container } from "../../style";

const Home = () => {
  return (
    <div className="allFather">
      <Navbar home />
      <Container className="max-width"></Container>
    </div>
  );
};

export default Home;
