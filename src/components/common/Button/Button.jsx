import React from "react";
import { Container } from "./ButtonStyle";

const Button = ({
  width,
  height,
  borderRadius,
  children,
  onClick,
  bgcolor,
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
      bgcolor={bgcolor}
      fontSize={fontSize}
      type={type}
      fontColor={fontColor}
      flexD={flexD}
      gap={gap}
      transform={transform}
    >
      <button bgColor={bgcolor}>
        <p>{children}</p>
      </button>
      {svg}
    </Container>
  );
};

export default Button;
