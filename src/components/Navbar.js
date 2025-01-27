import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../images/logo_rice.gif";

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.1);
`;

const NavbarContent = styled.div`
  margin: 1rem 0 0 1em;
  padding: 0.5rem 1rem;
`;

const LogoContainer = styled(Link)`
  img {
    height: 3rem;
  }
`;

function Navbar() {
  return (
    <NavbarContainer>
      <NavbarContent>
        <LogoContainer to="/">
          <img src={logo} alt="Rice" />
        </LogoContainer>
      </NavbarContent>
    </NavbarContainer>
  );
}

export default Navbar;
