import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  AppBar,
  Button,
  Menu,
  MenuItem,
  IconButton,
  Toolbar,
} from "@mui/material";
import logo from "../images/logo_rice.gif";

const AppBarContainer = styled(AppBar)`
  background: white !important;
  padding-top: 1rem;
`;


const ToolbarContainer = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  height: 4rem;

  @media screen and (max-width: 767px) {
    height: 2rem;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px){
    height: 2.5rem;
  }
`;

const MenuButton = styled(Button)`
  width: 10rem;
  height: 2.5rem;
  border-radius: 50px !important;
  padding: 12px 32px;
  text-transform: none !important;
  font-size: 1.1rem !important;

  @media screen and (max-width: 767px) {
    height: 1.5rem;
    width: 4rem;
    font-size: 0.7rem !important;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    height: 2rem;
    width: 7rem;
    font-size: 1rem !important;
  }
`;


function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBarContainer position="static">
      <ToolbarContainer>
        <Link to="/">
          <Logo src={logo} alt="Rice" />
        </Link>

        <MenuButton variant="outlined" onClick={handleClick}>
          Menu
        </MenuButton>
      </ToolbarContainer>

      {/* Desktop Dropdown Menu */}
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleClose}>Option 1</MenuItem>
        <MenuItem onClick={handleClose}>Option 2</MenuItem>
        <MenuItem onClick={handleClose}>Option 3</MenuItem>
      </Menu>
    </AppBarContainer>
  );
}

export default Navbar;
