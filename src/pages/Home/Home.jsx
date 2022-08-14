import React from "react";
import Navbar from "../../components/common/Navbar/Navbar";
import { Container } from "../../style";
import ArrowRight from "../../assets/icons/arrowRIght.png";
import Button from "../../components/common/Button/Button";
import Movies from "../../mock/MockData";
import {
  HomeSearch,
  Intro,
  Input,
  SearchBar,
  SearchIcon,
  CardWrapper,
  Selector,
} from "./HomeStyle";
import Socials from "../../components/common/Socials/Socials";
import Card from "../../components/common/Card/Card";
import { useState } from "react";
import { TVShows } from "../../mock/MockData";

const Home = () => {
  const [selector, setSelector] = useState("movies");
  return (
    <div className="allFather">
      <Navbar home />
      <HomeSearch>
        <h1>Find Movies, TV shows and more</h1>
        <SearchBar>
          <Input>
            <SearchIcon />
            <input placeholder="Enter your keywords..." />
          </Input>
          <Button width={"70px"} height={"70px"} borderRadius={"50px"}>
            <img src={ArrowRight} alt="arrow" />
          </Button>
        </SearchBar>
      </HomeSearch>
      <Container className="max-width">
        <Intro>
          f2movies, free movie streaming, watch movie free, watch movies free,
          free movies online, watch tv shows online, watch tv series, watch the
          simpsons online free, watch fear the walking dead, watch stranger
          things online, watch GLOW online free. Want to watch your favourite
          movie without going to a theatre? Yes, you can watch, stream, download
          the movie of your choice in the comfort of your home. Forget about
          paying hefty price I buying movie tickets. Stream the best of cinema
          through the links. We have got the list of the best movie websites
          where you can stream unlimited HD and 4K quality movies for free. Get
          the links of the most popular and genuine websites here.
        </Intro>
        <Socials />
        <Selector>
          <Button
            onClick={() => setSelector("movies")}
            width={"100px"}
            height={"30px"}
            type="social"
            borderRadius={"3px"}
            bgcolor={selector === "movies" ? "#e4ff00" : "#e9ecef"}
            fontColor={"#212529"}
            fontSize="14px"
            svg={""}
            flexD
          >
            <i class="fa-solid fa-circle-play"></i>
            movies
          </Button>
          <Button
            onClick={() => setSelector("tv-shows")}
            width={"auto"}
            height={"30px"}
            type="social"
            borderRadius={"3px"}
            bgcolor={selector === "tv-shows" ? "#e4ff00" : "#e9ecef"}
            fontColor={"#212529"}
            fontSize="14px"
            flexD
          >
            <i class="fa-solid fa-list"></i>
            TV-Shows
          </Button>
        </Selector>
        <CardWrapper>
          {selector === "movies"
            ? Movies.map((value) => <Card key={value.id} data={value} />)
            : TVShows.map((value) => <Card key={value.id} data={value} />)}
        </CardWrapper>
      </Container>
    </div>
  );
};

export default Home;
