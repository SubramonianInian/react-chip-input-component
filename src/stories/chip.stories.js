import React from "react";
import { useState } from "react";
import { storiesOf } from "@storybook/react";

import { Chip } from "../components/chip/chip";
const stories = storiesOf("Input Components", module);

stories.add("Chip Input", () => {
  const [chips, setChips] = useState(["Chip1", "Chip2"]);
  return (
    <Chip
      chips={chips}
      setChips={setChips}
      placeholder={"Type and Enter"}
      chipPrefix="#"
    />
  );
});

stories.add("Chip Input without prefix", () => {
  const [chips, setChips] = useState(["Chip1", "Chip2"]);
  return (
    <Chip
      chips={chips}
      setChips={setChips}
      placeholder={"Type and Enter"}
    />
  );
});