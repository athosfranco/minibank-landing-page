import React from "react";
import styled from "styled-components";
import PrimaryButton from "./PrimaryButton";
import logo from "../img/logo.svg";
import { Fade } from "react-reveal";

function Navigation() {
  return (
    <Fade top>
      <NavigationStyled>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <NavItems>
          <li>
            <a href="">Página Inicial</a>
          </li>
          <li>
            <a href="">Planos</a>
          </li>
          <li>
            <a href="">Fale Conosco</a>
          </li>
        </NavItems>
        <PrimaryButton name={"Login"} />
      </NavigationStyled>
    </Fade>
  );
}

const NavigationStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  min-height: 10vh;
  align-items: center;

  ul {
    display: flex;
    justify-content: space-between;
    width: 40%;
  }
`;

const NavItems = styled.ul`
  @media screen and (max-width: 1000px) {
    opacity: 0;
  }
`;

export default Navigation;
