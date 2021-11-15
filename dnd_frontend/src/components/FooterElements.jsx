import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const footerBox = styled.div`
  padding: 80px 60px;
  background: #26272b;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export const footerRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 20px; 
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const footerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
`;

export const footerColumn = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;

export const footerLink = styled(Link)`
  color: #fff;
  margin-bottom: 20px;
  text-decoration: none;
  &:hover {
    color: #E96B10;
    transition: 200ms ease-in;
  }
  &.active {
    color: #E96B10;
  }
`;

export const footerHeading = styled.h6`
    color: #fff;
    margin-bottom: 40px;
    font-weight: bold;
`;

export const footerText = styled.p`
    color: #fff;
`;


