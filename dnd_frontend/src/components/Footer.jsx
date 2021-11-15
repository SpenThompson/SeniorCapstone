import React from "react";
import { siteFooter, footerLinks, footerLink } from './FooterElements';

function Footer(props) {
    return (
        <div className="footer">
            <siteFooter>
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md-6">
                        <h6>About</h6>
                        <p class="text-justify">PLACEHOLDER</p>
                    </div>
                    <div class="col-xs-6 col-md-3">
                        <h6>Headings</h6>
                        <footerLinks>
                            <li><footerLink to="/">Home</footerLink></li>
                            <li><footerLink to="/members">Members</footerLink></li>
                            <li><footerLink to="/information">Information</footerLink></li>
                            <li><footerLink to="/services">Services</footerLink></li>
                            <li><footerLink to="/contact">Contact Us</footerLink></li>
                        </footerLinks>
                    </div>
                    <div class="col-xs-6 col-md-3">
                        <h6>Member Links</h6>
                        <footerLinks>
                            <li><footerLink to="/members/looking-for-game">Looking for Game</footerLink></li>
                            <li><footerLink to="/members/looking-for-players">Looking for Players</footerLink></li>
                            <li><footerLink to="/members/submit-homebrew">Submit Homebrew</footerLink></li>
                            <li><footerLink to="/members/open-games">Open Games</footerLink></li>
                            <li><footerLink to="/members/available-players">Available Players</footerLink></li>
                            <li><footerLink to="/members/homebrew-archive">Homebrew Archive</footerLink></li>
                        </footerLinks>
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
            </siteFooter>
        </div>
    )
 }



export default Footer;