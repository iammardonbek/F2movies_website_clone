import styled from "styled-components";

const ButtonType = ({ type }) => {
  if (type === "social") {
    return {
      padding: "5px 10px",
      transform: "translateY(-4px)",
      margin: "0 2px",
    };
  }
};

export const Container = styled.div`
  ${({ type }) => ButtonType({ type })}
  display: flex;
  cursor: pointer;
  user-select: none;
  transition: all 0.2s ease-in-out;
  align-items: center;
  gap: ${({ gap }) => (gap ? gap : "3px")};
  flex-direction: ${({ flexD }) => (flexD ? "row-reverse" : "row")};
  justify-content: center;
  background-color: ${({ bgcolor }) => (bgcolor ? bgcolor : "#e4ff00")};
  width: ${({ width }) => (width ? width : "200px")};
  height: ${({ height }) => (height ? height : "55px")};
  border-radius: ${({ borderRadius }) =>
    borderRadius ? borderRadius : "55px"};
  > button {
    color: ${({ fontColor }) => (fontColor ? fontColor : "black")};
    background-color: ${({ bgcolor }) => (bgcolor ? bgcolor : "#e4ff00")};
    border: none;
    cursor: pointer;
    text-transform: capitalize;
    font-size: ${({ fontSize }) => (fontSize ? fontSize : "1rem")};
  }
  p {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  :hover {
    transform: ${({ transform }) => (transform ? transform : "")};
  }
  :active {
    transform: scale(0.98);
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
  }
`;
