import React from "react";
import StyledAppContainer  from "./AppContainer.styles";

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const AppContainer = ({ children }: Props) => {
  return <StyledAppContainer>{children}</StyledAppContainer>;
};

export default AppContainer;
