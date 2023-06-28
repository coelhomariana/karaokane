import React from "react";
import { styled } from "styled-components";
import Karaokane from "../img/karaokane.png";

const Header = () => {
  return (
    <StyledHeader>
        <img alt='logo' src={Karaokane}></img>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.div`
width: 582px;
height: 119px;
margin-top: 55px;
margin-bottom: 68px;
`;