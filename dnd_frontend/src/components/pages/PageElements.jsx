import styled from 'styled-components';
import { UncontrolledCarousel, Jumbotron } from 'reactstrap';

export const PageTitle = styled.h1`
    font-family: 'Bebas Neue', cursive;
    font-kerning: auto;
    font-size: 400%;
    text-align: center;
`;

export const PageBody = styled.p`
    font-family: 'Cabin', sans-serif;
    font-size: 100%;
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 30px;
    margin-bottom: 30px;
    text-align: center;
    vertical-align: middle;
    &.inside-block{
        color: #ffffff;
    }
`;

export const PageCarousel = styled(UncontrolledCarousel)`
    width: 100%;
    height: auto;
    background-size: cover;
    &.home-carousel{
        width:100%;
        position:relative;
        overflow:hidden;
        height: 300px;
    }
`;

export const PageLines = styled.div`
    width: 70%;
    height: .25em;
    margin-left: 15%;
    margin-right: 15%;
    margin-top: 2em;
    margin-bottom: 2em;
    background-color: #E96B10;
    display: inline-block;
`;

export const PageBlock = styled(Jumbotron)`
    background-color: #000000;
    border-radius: 0 !important;
`;