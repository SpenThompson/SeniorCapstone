import React from "react";
import {
  Nav,
  NavLink,
  NavBrandLink,
  Bars,
  NavMenu
} from './NavbarElements';

function Navigation(props) {
  return (
    <nav class="navbar" expand="lg">
      <Nav>
        <Bars />   
        <NavMenu>
          <NavBrandLink class="navbar-brand" to="/" style={{ textDecoration: "none", color: "#000000"}}>
            Hendrix D&D Club
          </NavBrandLink>
          <NavLink to='/' activeStyle>
            Home
          </NavLink>
          <NavLink to='/members' activeStyle>
            Members
          </NavLink>
          <NavLink to='/information' activeStyle>
            Information
          </NavLink>
          <NavLink to='/services' activeStyle>
            Services
          </NavLink>
          <NavLink to='/contact' activeStyle>
            Contact Us
          </NavLink>
        </NavMenu>
      </Nav>
    </nav>
  );
}

export default Navigation;