import styled from "styled-components";

const ButtonType = ({ type }) => {
  if (type === "social") {
    return {
      padding: "5px 10px",
      margin: "0 2px",
    };
  }
};

export const Container = styled.div`
  ${({ type }) => ButtonType({ type })}
  display: flex;
  cursor: pointer;
  user-select: none;
  align-items: center;
  gap: ${({ gap }) => (gap ? gap : "5px")};
  flex-direction: ${({ flexD }) => (flexD ? "row-reverse" : "row")};
  justify-content: center;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "#e4ff00")};
  width: ${({ width }) => (width ? width : "200px")};
  height: ${({ height }) => (height ? height : "55px")};
  border-radius: ${({ borderRadius }) =>
    borderRadius ? borderRadius : "55px"};
  > button {
    color: ${({ fontColor }) => (fontColor ? fontColor : "black")};
    background-color: ${({ bgColor }) => (bgColor ? bgColor : "#e4ff00")};
    border: none;
    cursor: pointer;

    text-transform: capitalize;
    font-size: ${({ fontSize }) => (fontSize ? fontSize : "1rem")};
  }
`;
