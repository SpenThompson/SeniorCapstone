import React from "react";
import { useLocation, Link }from "react-router-dom";
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
        <Link class="navbar-brand" to="/" style={{ textDecoration: "none", color: "#000000"}}>
            Hendrix D&D Club
        </Link>
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