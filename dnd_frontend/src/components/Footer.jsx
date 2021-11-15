import React from "react";
import { 
   footerBox,
   footerHeading,
   footerText,
   footerContainer,
   footerColumn,
   footerRow,
   footerLink } from './FooterElements';

function Footer(props) {
    return (
        <footerBox>
          <footerContainer>
            <footerRow>
              <div class="container">
                <div class="col-md-6">
                  <footerHeading>About</footerHeading>
                  <footerText>PLACEHOLDER</footerText>
                </div>
              </div>
              <footerColumn>
                <footerHeading>Quick Forms</footerHeading>
                <footerLink to="/members/interest">Interest Form</footerLink>
                <footerLink to="/members/looking-for-game">Looking for Game</footerLink>
                <footerLink to="/members/looking-for-players">Looking for Players</footerLink>
                <footerLink to="/members/submit-homebrew">Submit Homebrew</footerLink>
              </footerColumn>
              <footerColumn>
                <footerHeading>Member Tools</footerHeading>
                <footerLink to="/members/open-games">Open Games</footerLink>
                <footerLink to="/members/interested-players">Interested Players</footerLink>
                <footerLink to="/members/homebrew-archive">Homebrew Archive</footerLink>
              </footerColumn>
            </footerRow>
          </footerContainer>
          <footerRow>
            <div class="container">
              <div class="row">
                <div class="col-md-8 col-sm-6 col-xs-12">
                  <footerText>Copyright &copy; 2021 All Rights Reserved by Spencer Thompson.</footerText>
                </div>
              </div>
            </div>
          </footerRow>
        </footerBox>
    )
 }



export default Footer;