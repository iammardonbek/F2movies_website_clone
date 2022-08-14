import React from "react";
import PlayIcon from "../../../assets/images/play.png";
import {
  BottomCard,
  Container,
  Play,
  Quality,
  Title,
  TopCard,
} from "./CardStyle";

const Card = ({ data }) => {
  return (
    <Container>
      <TopCard className="top-card">
        <Quality>{data.quality}</Quality>
        <img src={data.img} alt="strange" />
        <Play className="Play">
          <img className="card-image" src={PlayIcon} alt="play" />
        </Play>
      </TopCard>
      <BottomCard>
        <Title>{data.title}</Title>
        <section>
          <div className="year">{data.year}</div>
          <div className="dot"></div>
          <div className="duration">{data.duration}</div>
          <div className="type">{data.type}</div>
        </section>
      </BottomCard>
    </Container>
  );
};

export default Card;
