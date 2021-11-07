import React from "react";
import {
  Nav,
  NavLink,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';

function Navbar(props) {
  return (
    <div className="navigation=">
      <nav class="navbar navbar-expand navbar-dark bg-dark">
        <div class="container">
          <Nav>
        <NavMenu>
          <NavLink class="navbar-brand" to="/">
            Hendrix D&D Club
          </NavLink>
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
          <div>
            <ul class="navbar-nav ml-auto">
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;