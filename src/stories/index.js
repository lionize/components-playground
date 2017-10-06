import React from "react";
import { storiesOf } from "@kadira/storybook";

import "../injectGlobalCss";
import ColorCard from "../components/ColorCard";
import GradientCard from "../components/GradientCard";
import StripePayment from "../components/StripePayment";
import DropdownNotifications from "../components/DropdownNotifications";

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
