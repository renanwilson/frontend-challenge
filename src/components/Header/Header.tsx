import React from "react";
import { HeaderSection, Logo } from "./styles";
import logo from "assets/images/logo.png";

export function Header() {
  return (
    <HeaderSection>
      <Logo src={logo} alt="Be mobile logo" />
    </HeaderSection>
  );
}
