import React from "react";
import {  CardBody, CardGroup, CardTitle, CardSubtitle, CardText, Col, Container, Row,} from "reactstrap";
import { PageBlock, PageBody, PageButton, PageCard, PageCarousel, PageLines, PageSubheading, PageTitle } from "./PageElements";
import Slide1 from "./Resources/Home Slide 1.png";
import Slide2 from "./Resources/Home Slide 2.png";
import Slide3 from "./Resources/Home Slide 3.png";

function Home(){
  return (
    <div className="home">
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
            <PageTitle>Welcome</PageTitle>
          </Col>
        </Row>
      </Container>
          <PageCarousel className="home-carousel"
              items={[
                {
                  altText: 'Slide 1',
                  key: 1,
                  src: Slide1
                },
                {
                  altText: 'Slide 2',
                  key: 2,
                  src: Slide2
                },
                {
                  altText: 'Slide 3',
                  key: 3,
                  src: Slide3
                }
              ]}
            />
          <PageBlock>
            <Container>
              <PageSubheading className="inside-block">Add Proficiency in RPGs to your character sheet!</PageSubheading>
              <PageLines />
              <Row>
                <Col xs = "6">
                  <PageBody className="inside-block">
                    The Hendrix D&D Club is the official student organization devoted to the love of TTRPGs!  The D&D Club provides all of the necessary resources for its members to be able to play with as few bars of entry as possible!
                  </PageBody>
                </Col>
                <Col xs = "6" className="text-center">
                  <p><br></br></p>
                  <PageSubheading className="inside-block">Join Today!</PageSubheading>
                  <a href={"https://forms.gle/N78DPtMRbvnS6pWe9"} target="_blank" rel="noopener noreferrer">
                    <PageButton color="light" outline>
                      Click Here
                    </PageButton>
                  </a>
                </Col>
              </Row>
            <PageLines />
            </Container>
          </PageBlock>
          <Container>
            <PageSubheading>Upcoming Events And Announcements</PageSubheading>
            <CardGroup>
              <PageCard>
                <CardBody>
                  <CardTitle tag="h5">
                    Website Now Live
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                  >
                    12-7-2021
                  </CardSubtitle>
                  <CardText>
                    The Hendrix D&D Club website is live!  If you're seeing this, you're looking at it!
                  </CardText>
                </CardBody>
              </PageCard>
              <PageCard>
                <CardBody>
                  <CardTitle tag="h5">
                    Dice Rental System Now Available
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                  >
                    11-12-2021
                  </CardSubtitle>
                  <CardText>
                    The Dice Rental System's dice have arrived!  Please email thompsonjj@hendrix.edu for inquiries!
                  </CardText>
                </CardBody>
              </PageCard>
              <PageCard>
                <CardBody>
                  <CardTitle tag="h5">
                    Dice Tray Workshop
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                  >
                    10-8-2021
                  </CardSubtitle>
                  <CardText>
                    We are holding a Dice Tray Workshop on Friday, the 8th!  Materials will be provided, come and build your very own dice tray!
                  </CardText>
                </CardBody>
              </PageCard>
            </CardGroup>
            <p><br></br></p>
          </Container>
    </div>
  );
}

export default Home;