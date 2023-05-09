import React from "react"
import styled from "styled-components"

const Loading = ({ theme = {} }) => (
  <StyledLoading>
    <div className="dot"></div>
    <div className="dot"></div>
    <div className="dot"></div>
    <div className="dot"></div>
  </StyledLoading>
)

const StyledLoading = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${theme?.width ?? "100px"};
  height: ${theme?.height ?? "100px"};

  .dot {
    postition: relative;
    display: flex;
    align-items: center;
    height: 100%;
    width: 25%;
    transform-origin: center top;

    &::after {
      content: "";
      display: block;
      width: 100%;
      height: 25%;
      border-radius: 50%;
      background-color: ${theme?.dotColor ?? "#0047ab"};
    }

    &:first-child {
      animation: animate1 1.2s linear infinite;
    }
    &:last-child {
      animation: animate2 1.2s linear infinite;
    }
  }

  @keyframes animate1 {
    0% {
      transform: rotate(0deg);
      animation-timing-function: ease-out;
    }
    25% {
      transform: rotate(70deg);
      animation-timing-function: ease-in;
    }
    50% {
      transform: rotate(0deg);
      animation-timing-function: linear;
    }
  }
  @keyframes animate2 {
    0% {
      transform: rotate(0deg);
      animation-timing-function: linear;
    }
    50% {
      transform: rotate(0deg);
      animation-timing-function: ease-out;
    }
    75% {
      transform: rotate(-70deg);
      animation-timing-function: ease-in;
    }
  }
`

export default Loading
