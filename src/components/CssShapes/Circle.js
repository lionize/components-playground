import React from "react";
import styled from "styled-components";

import { randomGradient } from "./gradient";

const Wrapper = styled.div`
  width: ${props => props.size};
  height: ${props => props.size};
  position: relative;
  margin: 10px;
  border-radius: 50%;
`;

const FilledWrapper = styled(Wrapper)`
  background-image: ${props => props.color};
`;

const OutlineWrapper = styled(Wrapper)`
  width: ${props => `calc(${props.size} - ${props.size} / 7)`};
  height: ${props => `calc(${props.size} - ${props.size} / 7)`};
  position: relative;
  background: #fff;

  &:after {
    content: "";
    position: absolute;
    top: ${props => `calc(${props.size} / -7)`};
    bottom: ${props => `calc(${props.size} / -7)`};
    left: ${props => `calc(${props.size} / -7)`};
    right: ${props => `calc(${props.size} / -7)`};
    background-image: ${props => props.color};
    z-index: -1;
    border-radius: inherit;
  }
`;

const Circle = ({ className, children, outline, size = "50px", color }) => {
  color = color || randomGradient();
  if (outline) {
    return (
      <OutlineWrapper className={className} size={size} color={color}>
        {children}
      </OutlineWrapper>
    );
  } else {
    return (
      <FilledWrapper className={className} size={size} color={color}>
        {children}
      </FilledWrapper>
    );
  }
};

export default Circle;
