import React from "react";
import styled from "styled-components";

const pill = require("./pill.png");

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-right: 0.75rem;

  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${props => props.background || "rgba(255, 255, 255, 0.2)"};
`;

const Icon = styled.img.attrs({
  src: pill
})`
  width: 16px;
`;

const DrugIcon = ({ background }) => (
  <Wrapper background={background}>
    <Icon />
  </Wrapper>
);

export default DrugIcon;
