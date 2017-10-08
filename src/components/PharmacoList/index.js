import React from "react";
import styled from "styled-components";
import FA from "react-fontawesome";
import Hero from "./Hero";
import DrugCard from "./DrugCard";

const colors = {
  dark: "#333",
  light: "#666"
};

const Wrapper = styled.div`
  width: 375px;
  padding: 1.5rem;
  background: #fcfcfc;

  box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.25);
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 2.2rem;

  font-size: 1.2rem;

  color: ${colors.light};
`;

const UserIcon = styled(FA).attrs({
  name: "user-o"
})``;

const Title = styled.h1`
  margin: 0;
  padding: 0;

  font-size: 1.3rem;
  letter-spacing: 1px;
  font-weight: 900;

  color: ${colors.dark};
`;

const Body = styled.div``;

const SettingsIcon = styled(FA).attrs({
  name: "sliders"
})``;

const drugs = [
  {
    name: "Concerta",
    size: "7 mg",
    price: "$15.95",
    colors: ["#ff9966", "#ff5e62"]
  },
  {
    name: "Chantix",
    size: "20 mg",
    price: "$25.99",
    colors: ["#4AC29A", "#BDFFF3"]
  },
  {
    name: "Prozac",
    size: "50 mg",
    price: "$21.99",
    colors: ["#EECDA3", "#EF629F"]
  },
  {
    name: "Welbutrin",
    size: "10 mg",
    price: "$1.99",
    colors: ["#B24592", "#F15F79"]
  },
  {
    name: "Lexapro",
    size: "5 mg",
    price: "$10.99",
    colors: ["#4ECDC4", "#556270"]
  },
  {
    name: "Abilify",
    size: "10 mg",
    price: "$5.99",
    colors: ["#BE93C5", "#7BC6CC"]
  }
];

const PharmacoList = () => (
  <Wrapper>
    <Header>
      <UserIcon />
      <Title>The Large Clinic</Title>
      <SettingsIcon />
    </Header>

    <Body>
      <Hero />
      {drugs.map(drug => <DrugCard {...drug} />)}
    </Body>
  </Wrapper>
);

export default PharmacoList;
