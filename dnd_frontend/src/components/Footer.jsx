import React from "react";
import { SiteFooter, FooterHeading, FooterLinks, FooterLink, FooterLinkA, FooterText} from './FooterElements';

function Footer(props) {
    return (
        <div className="footer">
            <SiteFooter>
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md-6">
                        <FooterHeading>ABOUT</FooterHeading>
                        <FooterText class="text-justify">The Hendrix D&D club is a student organization on Hendrix Campus devoted to making Tabletop Roleplaying Games such as Dungeons and Dragons more accessbile to our members.  If you are interested in joining, please click on the 'interest form' link.</FooterText>
                    </div>
                    <div class="col-xs-6 col-md-3">
                        <FooterHeading>MEMBER LINKS</FooterHeading>
                        <FooterLinks>
                            <li><FooterLink to="/services">Services</FooterLink></li>
                            <li><FooterLink to="/members/open-games">Open Games</FooterLink></li>
                            <li><FooterLink to="/members/available-players">Available Players</FooterLink></li>
                            <li><FooterLink to="/members/homebrew-archive">Homebrew Archive</FooterLink></li>
                            <li><FooterLink to="/contact">Contact Us</FooterLink></li>
                        </FooterLinks>
                    </div>
                    <div class="col-xs-6 col-md-3">
                        <FooterHeading>QUICK FORMS</FooterHeading>
                        <FooterLinks>
                            <li><FooterLinkA href={"https://forms.gle/N78DPtMRbvnS6pWe9"} target="_blank" rel="noopener noreferrer">Interest Form</FooterLinkA></li>
                            <li><FooterLink to="/members/looking-for-game">Looking for Game</FooterLink></li>
                            <li><FooterLink to="/members/looking-for-players">Looking for Players</FooterLink></li>
                            <li><FooterLink to="/members/submit-homebrew">Submit Homebrew</FooterLink></li>
                        </FooterLinks>
                    </div>
                    <hr></hr>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-8 col-sm-6 col-xs-12">
                                <p class="copyright-text">Copyright &copy; 2021 All Rights Reserved by Spencer Thompson.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </SiteFooter>
        </div>
    )
 }

 

export default Footer;