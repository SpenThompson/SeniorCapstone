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
`;

export const PageCarousel = styled(UncontrolledCarousel)`
    width: 100%;
    height: auto;
    &:image-wrap{
        width:100%;
        position:relative;
        overflow:hidden;
        height:240px;
    }
`;