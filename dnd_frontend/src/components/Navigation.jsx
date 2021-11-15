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
        <NavBrandLink class="navbar-brand" to="/">
            Hendrix D&D Club
        </NavBrandLink>
        <Bars />   
        <NavMenu>
          <NavLink to='/'>
            Home
          </NavLink>
          <NavLink to='/members'>
            Members
          </NavLink>
          <NavLink to='/information'>
            Information
          </NavLink>
          <NavLink to='/services'>
            Services
          </NavLink>
          <NavLink to='/contact'>
            Contact Us
          </NavLink>
        </NavMenu>
      </Nav>
    </nav>
  );
}

export default Navigation;