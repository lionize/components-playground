import React from "react";
import styled from "styled-components";
import FA from "react-fontawesome";

const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;

  margin-right: 0.75rem;
  margin-top: 0.75rem;

  border-radius: 3px;

  background-color: #fa74ef;
  color: white;
  font-size: 0.75rem;
  letter-spacing: 1px;
  padding: 0.4rem 0.8rem;
`;

const Name = styled.div``;

const CloseIcon = styled.a`
  font-weight: bold;
  margin-left: 0.75rem;
  color: white;
  text-decoration: none;
`;

const Tag = ({ children }) => (
  <Wrapper>
    <Name>{children}</Name>
    <CloseIcon href="#">x</CloseIcon>
  </Wrapper>
);

export default Tag;
