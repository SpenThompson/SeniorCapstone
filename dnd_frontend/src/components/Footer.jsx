import React from "react";
import { 
   FooterBox,
   FooterHeading,
   FooterText,
   FooterContainer,
   FooterColumn,
   FooterRow,
   FooterLink } from './FooterElements';

function Footer(props) {
    return (
        <FooterBox>
          <FooterContainer>
            <FooterRow>
              <div class="container">
                <div class="col-md-6">
                  <FooterHeading>About</FooterHeading>
                  <FooterText>PLACEHOLDER</FooterText>
                </div>
              </div>
              <FooterColumn>
                <FooterHeading>Quick Forms</FooterHeading>
                <FooterLink to="/members/interest">Interest Form</FooterLink>
                <FooterLink to="/members/looking-for-game">Looking for Game</FooterLink>
                <FooterLink to="/members/looking-for-players">Looking for Players</FooterLink>
                <FooterLink to="/members/submit-homebrew">Submit Homebrew</FooterLink>
              </FooterColumn>
              <FooterColumn>
                <FooterHeading>Member Tools</FooterHeading>
                <FooterLink to="/members/open-games">Open Games</FooterLink>
                <FooterLink to="/members/interested-players">Interested Players</FooterLink>
                <FooterLink to="/members/homebrew-archive">Homebrew Archive</FooterLink>
              </FooterColumn>
            </FooterRow>
          </FooterContainer>
          <FooterRow>
            <div class="container">
              <div class="row">
                <div class="col-md-8 col-sm-6 col-xs-12">
                  <FooterText>Copyright &copy; 2021 All Rights Reserved by Spencer Thompson.</FooterText>
                </div>
              </div>
            </div>
          </FooterRow>
        </FooterBox>
    )
 }



export default Footer;