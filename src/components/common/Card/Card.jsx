import React from "react";
import Strange from "../../../assets/images/strange.png";
import PlayIcon from "../../../assets/images/play.png";
import {
  BottomCard,
  Container,
  Play,
  Quality,
  Title,
  TopCard,
} from "./CardStyle";

const Card = () => {
  return (
    <Container>
      <TopCard className="top-card">
        <Quality>HD</Quality>
        <img src={Strange} alt="strange" />
        <Play className="Play">
          <img className="card-image" src={PlayIcon} alt="play" />
        </Play>
      </TopCard>
      <BottomCard>
        <Title>Doctor Strange in the Multiverse of Madness</Title>
        <section>
          <div>2022</div>
          <div className="dot"></div>
          <div className="duration">99 min</div>
          <div className="type">movie</div>
        </section>
      </BottomCard>
    </Container>
  );
};

export default Card;
