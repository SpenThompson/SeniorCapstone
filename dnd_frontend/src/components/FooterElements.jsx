import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const SiteFooter = styled.div`
  background-color:#26272b;
  display: flex;
  bottom: 0;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  padding:45px 0 20px;
  font-size:15px;
  line-height:24px;
  color:#737373; 
`;

export const FooterLink = styled(Link)`
  color: #737373;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.inline li{
    display:inline-block;
  }
  &.active {
    color: #E96B10;
  }
  &:hover {
    color: #E96B10;
    text-decoration: none;
    transition: 200ms ease-in;
  }
`;

export const FooterLinks = styled.ul`
    padding-left:0;
    list-style:none;
    .li{
        display:block;
    }
`;


