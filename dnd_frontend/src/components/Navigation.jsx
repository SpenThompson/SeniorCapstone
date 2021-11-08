import React from "react";
import { Link }from "react-router-dom";
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
          <NavLink to='/' activestyle>
            Home
          </NavLink>
          <NavLink to='/members' activestyle>
            Members
          </NavLink>
          <NavLink to='/information' activestyle>
            Information
          </NavLink>
          <NavLink to='/services' activestyle>
            Services
          </NavLink>
          <NavLink to='/contact' activestyle>
            Contact Us
          </NavLink>
        </NavMenu>
      </Nav>
    </nav>
  );
}

export default Navigation;