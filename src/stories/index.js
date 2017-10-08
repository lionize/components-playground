import React from "react";
import { storiesOf } from "@kadira/storybook";
import styled from "styled-components";

import "../injectGlobalCss";
import ColorCard from "../components/ColorCard";
import GradientCard from "../components/GradientCard";
import StripePayment from "../components/StripePayment";
import DropdownNotifications from "../components/DropdownNotifications";
import { Circle, Triangle } from "../components/CssShapes";
import MobileUserList from "../components/MobileUserList";
import ChatBot from "../components/ChatBot";
import MobileRegistrationForm from "../components/MobileRegistrationForm";
import UserSettings from "../components/UserSettings";
import PharmacoList from "../components/PharmacoList";
import Login from "../components/Login";
import Vpn from "../components/Vpn";
import Blog from "../components/Blog";

const color = () => {
  const colors = ["47DAFF", "FFB547", "47FF8E", "FF6347", "FF47F3"];
  return "#" + colors[Math.floor(Math.random() * colors.length)];
};

const declaration =
  "When in the Course of human events it becomes necessary for one people to dissolve the political bands which have connected them with another and to assume among the powers of the earth, the separate and equal station to which the Laws of Nature and of Nature's God entitle them, a decent respect to the opinions of mankind requires that they should declare the causes which impel them to the separation.";

storiesOf("ColorCard", module).add("many", () => (
  <div>
    <ColorCard
      category="Leadership"
      title="Leadership Headline"
      body={declaration}
      color={color()}
    />
    <ColorCard
      category="Marketing"
      title="Marketing Strategy"
      body={declaration}
      color={color()}
    />
  </div>
));

storiesOf("GradientCard", () => module).add("revenue", () => <GradientCard />);

storiesOf("StripePayment", () => module).add("dark", () => (
  <StripePayment dark />
));

storiesOf("DropdownNotifications", () => module).add("normal", () => (
  <DropdownNotifications />
));

const ShapesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const randomBool = () => Math.random() >= 0.5;
const randomSize = () => {
  const size = Math.floor(Math.random() * 40) + 10;
  return `${size}px`;
};

storiesOf("CSS Shapes", () => module).add("shapes", () => {
  const circles = [];

  for (let i = 0; i < 50; i++) {
    const size = randomSize();
    circles.push(<Circle key={i} outline={false} size={size} />);
  }

  return <ShapesWrapper>{circles}</ShapesWrapper>;
});

const MobileUserListWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: lightblue;
  padding: 1rem;
`;
storiesOf("MobileUserList", () => module).add("default", () => (
  <MobileUserListWrapper>
    <MobileUserList />
  </MobileUserListWrapper>
));

const ChatBotWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;
storiesOf("ChatBot", () => module).add("default", () => (
  <ChatBotWrapper>
    <ChatBot />
  </ChatBotWrapper>
));

const MobileRegistrationFormWrapper = styled.div`
  background-color: #aaafb8;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;
storiesOf("MobileRegistrationForm", () => module).add("default", () => (
  <MobileRegistrationFormWrapper>
    <MobileRegistrationForm />
  </MobileRegistrationFormWrapper>
));

const Wrapper = styled.div`
  background: ${props => props.color || "#fff"};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem;

  & * {
    box-sizing: border-box;
  }
`;

storiesOf("UserSettings", () => module).add("default", () => (
  <Wrapper color="#f5f5f5">
    <UserSettings />
  </Wrapper>
));

storiesOf("PharmacoList", () => module).add("default", () => (
  <Wrapper color="linear-gradient(to bottom right, #D120E5, #BA1DCC)">
    <PharmacoList />
  </Wrapper>
));

storiesOf("Login", () => module).add("default", () => (
  <Wrapper color="#e6e6e6">
    <Login />
  </Wrapper>
));

storiesOf("Vpn", () => module).add("default", () => (
  <Wrapper color="linear-gradient(to bottom right, #D120E5, #BA1DCC)">
    <Vpn />
  </Wrapper>
));

storiesOf("Blog", () => module).add("default", () => (
  <Wrapper color="#e6e6e6">
    <Blog />
  </Wrapper>
));
