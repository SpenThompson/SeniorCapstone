import React from "react";
import { Link } from "react-router-dom";
import { CardBody, CardGroup, CardImg, CardTitle, CardText, Col, Container, Row,} from "reactstrap";
import { PageBody, PageButton, PageCard, PageLines, PageLink, PageTitle } from "./PageElements";
import Discord from "./Resources/Discord Logo.png";
import DiceCloud from "./Resources/Dicecloud Logo.png";
import DiceRental from "./Resources/DiceRentalSystem.jpg";
import DndBeyond from "./Resources/DndBeyond Logo.png";

function Services(){
  return (
    <div className="services">
      <Container>
          <Row>
            <p><br></br></p>
          </Row>
          <Row>
            <Col md={{
            offset: 3,
            size: 6
            }}
            sm="12">
              <PageTitle>Services</PageTitle>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <PageBody>
                The following services are provided to our members to use, free of charge:
              </PageBody>
            </Col>
          </Row>
          <PageLines className="inside-white"/>
      </Container>
      <PageBody>
        <CardGroup>
          <PageCard>
              <CardImg
                alt="Discord Logo"
                src={Discord}
                top
                width="100%"
              />
              <CardBody>
                <CardTitle tag="h5">
                  Discord
                </CardTitle>
                <CardText>
                  The Official Hendrix D&D Club Discord, join for resources, discussion, and virtual tables!
                </CardText>
                <a href="https://discord.gg/XtHeDa3XBs" target="_blank">
                  <PageButton color="dark" outline>
                    Click Here
                  </PageButton>
                </a>
                </CardBody>
            </PageCard>
            <PageCard>
              <CardImg
                  alt="DND Beyond Logo"
                  src={DndBeyond}
                  top
                  width="100%"
              />
              <CardBody>
                <CardTitle tag="h5">
                  DND Beyond
                </CardTitle>
                <CardText>
                  Character sheets, campaign trackers and more! Have your DM contact us for credentials!
                </CardText>
                <PageLink href="https://www.dndbeyond.com/" target="_blank">
                  <PageButton color="dark" outline>
                    Click Here
                  </PageButton>
                </PageLink>
                </CardBody>
            </PageCard>
            <PageCard>
              <CardImg
                  alt="DiceCloud Logo"
                  src={DiceCloud}
                  top
                  width="100%"
              />
              <CardBody>
                <CardTitle tag="h5">
                  DiceCloud
                </CardTitle>
                <CardText>
                  Free to use, super customizable character sheets with deep capabilities for homebrew!
                </CardText>
                <PageLink href="https://www.dicecloud.com/" target="_blank">
                  <PageButton color="dark" outline>
                    Click Here
                  </PageButton>
                </PageLink>
                </CardBody>
            </PageCard>
            <PageCard>
              <CardImg
                  alt="Dice Rental System"
                  src={DiceRental}
                  top
                  width="100%"
              />
              <CardBody>
                <CardTitle tag="h5">
                  Dice Rental System
                </CardTitle>
                <CardText>
                  Dice free to use for members of the D&D Club!  Contact us for more details and inquiries!
                </CardText>
                <Link to="/contact">
                  <PageButton color="dark" outline>
                    Click Here
                  </PageButton>
                </Link>
                </CardBody>
            </PageCard>
        </CardGroup>
      </PageBody>
      <PageLines className="inside-white"/>
    </div>
  );
}

export default Services;