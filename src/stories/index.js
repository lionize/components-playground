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
