import React from "react";
import { SiteFooter, FooterLinks, FooterLink } from './FooterElements';

function Footer(props) {
    return (
        <div className="footer">
            <SiteFooter>
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md-6">
                        <h6>About</h6>
                        <p class="text-justify">PLACEHOLDER</p>
                    </div>
                    <div class="col-xs-6 col-md-3">
                        <h6>Member Links</h6>
                        <FooterLinks>
                            <li><FooterLink to="/services">Services</FooterLink></li>
                            <li><FooterLink to="/members/open-games">Open Games</FooterLink></li>
                            <li><FooterLink to="/members/available-players">Available Players</FooterLink></li>
                            <li><FooterLink to="/members/homebrew-archive">Homebrew Archive</FooterLink></li>
                            <li><FooterLink to="/contact">Contact Us</FooterLink></li>
                        </FooterLinks>
                    </div>
                    <div class="col-xs-6 col-md-3">
                        <h6>Quick Forms</h6>
                        <FooterLinks>
                            <li><FooterLink to="/members/interest">Interest Form</FooterLink></li>
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