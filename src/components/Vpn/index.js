import React from "react";
import styled, { css } from "styled-components";
import FA from "react-fontawesome";

const colors = {
  primary: "white",
  secondary: "#666c86",
  gradient: ["#ff00cc", "#333399"]
};

const Wrapper = styled.div`
  width: 350px;
  background: radial-gradient(circle at center, #373754 0, #323254 100%);

  font-family: system-ui;

  box-shadow: 0 0 25px 2px rgba(0, 0, 0, 0.55);
`;

const PaddingBox = styled.div`padding: 1.5rem;`;

const bottomShadow = css`
  border-bottom: 1px solid #333;
  box-shadow: inset 0 -1px 1px -1px rgba(200, 200, 255, 0.25);
`;

const Header = styled(PaddingBox)`
  ${bottomShadow};

  display: flex;
  align-items: center;
  justify-content: space-between;

  color: white;
`;

const HeaderText = styled.div`
  text-align: center;

  & h1 {
    color: white;
    font-size: 0.8rem;

    text-transform: uppercase;
    letter-spacing: 1px;

    margin: 0;
    margin-bottom: 0.25rem;
  }

  & p {
    color: ${colors.secondary};

    font-size: 0.7rem;
    font-weight: 600;

    margin: 0;
  }
`;

const iconStyle = css`
  color: #616780;
  font-size: 1.6rem;
`;

const SettingsIcon = styled(FA).attrs({
  name: "sliders"
})`
    ${iconStyle};
`;

const UserIcon = styled(FA).attrs({
  name: "user-circle"
})`
    ${iconStyle};
`;

const Nav = styled.div`
  ${bottomShadow};
  display: flex;
  align-items: center;
`;

const rainbowBorder = css`
  border-width: 0 0 2px 0;
  border-style: solid;
  border-image: linear-gradient(
    to left,
    ${colors.gradient[0]},
    ${colors.gradient[1]}
  );
  border-image-slice: 1;
`;

const Tab = styled.div`
  width: 50%;
  text-align: center;
  padding: 1.5rem 1rem;
  color: ${props => (props.selected ? colors.primary : colors.secondary)};
  font-weight: bold;

  ${props => props.selected && rainbowBorder};
`;

const Services = styled(PaddingBox)`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const ServiceWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 19px;
  height: 19px;
  border-radius: 50%;
  background-color: #282838;
`;

const Checkbox = styled.div`
  ${props =>
    props.checked &&
    `
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: linear-gradient(to top right, ${colors.gradient[0]}, ${colors
      .gradient[1]})
  `};
`;

const Label = styled.label`
  font-size: 0.8rem;
  font-weight: bold;
  margin-left: 0.5rem;
  color: ${props => (props.checked ? "#fff" : colors.secondary)};
`;

const Service = ({ children, checked }) => (
  <ServiceWrapper>
    <CheckboxWrapper>
      <Checkbox checked={checked} />
    </CheckboxWrapper>
    <Label checked={checked}>{children}</Label>
  </ServiceWrapper>
);

const Listing = styled.div`
  background: #fff;
  border-radius: 12px;
  margin: 0.25rem 1rem 2.5rem;
  padding: 1.25rem;

  position: relative;
`;

const Title = styled.h1`
  text-align: center;
  margin: 0;
  font-size: 0.9rem;
  margin-bottom: 0.75rem;
`;

const Locations = styled.div`margin-bottom: 1rem;`;

const LocationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.5rem 0;
`;

const Wrap = styled.div`
  display: flex;
  align-items: center;
`;

const Name = styled.p`
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 500;
  margin-left: 1rem;
`;

const Bases = styled.p`
  text-align: right;
  font-size: 0.7rem;
  color: ${props => (props.checked ? "dodgerblue" : "#666")};
  ${props => props.checked && "font-weight: bold;"};
`;

const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 21px;
  height: 21px;
  border-radius: 50%;
  background: #ddd;
`;

const Select = styled.div`
  ${props =>
    props.checked &&
    `
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background-color: dodgerblue;
  `};
`;

const Location = ({ checked, bases, children }) => (
  <LocationWrapper>
    <Wrap>
      <SelectWrapper>
        <Select checked={checked} />
      </SelectWrapper>
      <Name>{children}</Name>
    </Wrap>
    <Bases checked={checked}>{bases} bases</Bases>
  </LocationWrapper>
);

const Button = styled.button`
  position: absolute;
  bottom: -20px;
  left: 0;
  right: 0;

  margin-left: auto;
  margin-right: auto;

  border-radius: 15px;

  color: white;
  font-size: 0.7rem;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;

  width: 150px;
  height: 40px;

  border: 0;
  background: linear-gradient(
    to right,
    ${colors.gradient[0]},
    ${colors.gradient[1]}
  );
`;

const Vpn = () => (
  <Wrapper>
    <Header>
      <SettingsIcon />
      <HeaderText>
        <h1>Teleportation Service</h1>
        <p>Select a City or Planet</p>
      </HeaderText>
      <UserIcon />
    </Header>
    <Nav>
      <Tab>Earth</Tab>
      <Tab selected>Planet</Tab>
    </Nav>
    <Services>
      <Service>Slow</Service>
      <Service>Instant</Service>
      <Service checked>Time Warp</Service>
    </Services>
    <Listing>
      <Title>Planets</Title>
      <Locations>
        <Location bases={12}>Mercury</Location>
        <Location bases={15}>Venus</Location>
        <Location bases={102}>Mars</Location>
        <Location bases={72}>Jupiter</Location>
        <Location bases={41} checked>
          Saturn
        </Location>
        <Location bases={1}>Uranus</Location>
        <Location bases={4}>Neptune</Location>
      </Locations>
      <Button>Teleport Now</Button>
    </Listing>
  </Wrapper>
);

export default Vpn;
