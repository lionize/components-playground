import React from "react";
import styled from "styled-components";

import { randomGradient } from "./gradient";

const Wrapper = styled.div`
  width: ${props => props.size};
  height: ${props => props.size};
  position: relative;
  clip: rect(auto ${props => props.size / 2} ${props => props.size} auto);

  &:after {
    content: "";
    position: absolute;
    background-color: white;
    top: 8px;
    bottom: 8px;
    left: 8px;
    right: 8px;
    transform: rotate(-45deg);
    background-image: ${randomGradient()};
    border: 1px solid #fff;
  }
`;

const randomDirection = () => {
  const directions = ["top", "bottom", "left", "right"];
  return directions[Math.floor(Math.random * directions.length)];
};

const Triangle = ({ outline, direction }) => {
  const dir = direction || randomDirection();
  return <Wrapper direction={dir} />;
};

export default Triangle;
