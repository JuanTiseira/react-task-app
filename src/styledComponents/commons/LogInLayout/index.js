import React, { useState } from "react";
import { Wrapper, LateralMenuContainer, Content, Container } from "./styled";

const LogInLayout = (props) => {

  return (
    <Wrapper>
      <Content>{props.children}</Content>
    </Wrapper>
  );
};

export default LogInLayout;
