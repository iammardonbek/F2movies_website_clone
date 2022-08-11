import React from "react";
import { Container } from "./ButtonStyle";

const Button = ({
  width,
  height,
  borderRadius,
  children,
  onClick,
  bgColor,
  fontColor,
  fontSize,
  svg,
  type,
  flexD,
  gap,
  transform,
}) => {
  return (
    <Container
      onClick={onClick}
      width={width}
      height={height}
      borderRadius={borderRadius}
      bgColor={bgColor}
      fontSize={fontSize}
      type={type}
      fontColor={fontColor}
      flexD={flexD}
      gap={gap}
      transform={transform}
    >
      <button bgColor={bgColor}>
        <p>{children}</p>
      </button>
      {svg}
    </Container>
  );
};

export default Button;
