import React from "react";
import { Wrapper, Text } from "./style";

const ColoredLabel = (props) => {
  return (
    <Wrapper
      background={props.background}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      <Text color={props.color}>{props.label}</Text>
    </Wrapper>
  );
};

export default ColoredLabel;
