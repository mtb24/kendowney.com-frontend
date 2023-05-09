import React from "react"
import PropTypes from 'prop-types'
import styled from "styled-components"

const Loading = ({theme}) => (
  <StyledContainer theme={theme}>
    <div className="dot"></div>
    <div className="dot"></div>
    <div className="dot"></div>
    <div className="dot"></div>
  </StyledContainer>
)

const StyledContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.theme.width};
  height: ${props => props.theme.height};

  .dot {
    position: relative;
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
      background-color: ${props => props.theme.dotColor};
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

Loading.propTypes = {
  /**
   * String to display as the site title
   */
  theme: PropTypes.object,
}

Loading.defaultProps = {
  theme: {
    width: '100px',
    height: '100px',
    dotColor: 'cadetblue',
  },
}

export default Loading
