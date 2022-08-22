import styled from "styled-components";
export const Container = styled.div`
  /* max-width: 190px; */
  cursor: pointer;
  user-select: none;
`;
export const TopCard = styled.div`
  position: relative;
  height: 260px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  :hover img {
    filter: brightness(70%);
  }
  :hover {
  }
`;
export const Play = styled.div`
  position: absolute;
  padding: 10px;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
  background-color: var(--greenColor);
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const BottomCard = styled.div`
  padding-top: 10px;
  section {
    display: flex;
    align-items: center;
    color: white;
    .dot {
      margin: 0 8px;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background-color: white;
      display: flex;
      align-items: center;
    }
    .type {
      margin-left: auto;
      text-transform: capitalize;
      border: 1px solid white;
      padding: 2px;
      font-size: 12px;
    }
    .year {
      font-size: 13px;
      font-weight: 100;
    }
    .duration {
      font-weight: 100;
      font-size: 13px;
    }
  }
`;
export const Title = styled.div`
  color: white;
  font-size: 16px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-bottom: 5px;
  font-weight: 900;
  :hover {
    color: var(--greenColor);
  }
`;
export const Quality = styled.div`
  position: absolute;
  z-index: 2;
  top: 10px;
  right: 10px;
  background-color: #f8f9fa;
  padding: 2px 5px;
  border-radius: 3px;
  box-shadow: 0 0 30px #000;
  text-transform: uppercase;
  font-size: 13px;
`;
