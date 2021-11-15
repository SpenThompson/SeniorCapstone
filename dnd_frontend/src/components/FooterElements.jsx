import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const siteFooter = styled.div`
  background-color:#26272b;
  padding:45px 0 20px;
  font-size:15px;
  line-height:24px;
  color:#737373; 
`;

export const footerLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`;

export const footerLinks = styled.ul`
    padding-left:0;
    list-style:none
`;


