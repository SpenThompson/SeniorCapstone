import React from "react";
import { Col, Container, Row,} from "reactstrap";
import { Link } from "react-router-dom";
import { PageBlock, PageBody, PageButton, PageLines, PageSubheading, PageTitle } from "./PageElements";

function Members(){
  return (
    <div className="members">
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
              <PageTitle>Members</PageTitle>
            </Col>
          </Row>
      </Container>
      <Container>
        <Row>
          <Col className="text-center">
            <PageBody>
              The Hendrix D&D Club wants to make it as easy as possible to connect with other players on campus!  Want to play but having a hard time finding a group?  Looking for some Hendrix-made content?  We've got you covered!
            </PageBody>
          </Col>
        </Row>
        <p><br></br></p>
      </Container>
      <PageBlock>
          <Container>
            <PageSubheading className="inside-block">Looking for Players?</PageSubheading>
            <PageLines />
              <Row>
                <Col className="text-center" xs = "6">
                  <PageSubheading className="inside-block">Put up a Listing:</PageSubheading>
                  <Link to="/members/looking-for-players">
                    <PageButton color="light" outline>Go to Form</PageButton>
                  </Link>
                </Col>
                <Col className="text-center" xs = "6">
                  <PageSubheading className="inside-block">Player Listings:</PageSubheading>
                  <Link to="/members/available-players">
                    <PageButton color="light" outline>Go to Listings</PageButton>
                  </Link>
                </Col>
              </Row>
            <PageLines />
          </Container>
      </PageBlock>
      <Container>
          <PageSubheading>Looking for a Game?</PageSubheading>
          <PageLines className="inside-white"/>
            <Row>
              <Col className="text-center" xs = "6">
                <PageSubheading>Put up a Listing:</PageSubheading>
                <Link to="/members/looking-for-game">
                  <PageButton color="dark" outline>Go to Form</PageButton>
                </Link>
              </Col>
              <Col className="text-center" xs = "6">
                <PageSubheading>Game Listings:</PageSubheading>
                <Link to="/members/open-games">
                  <PageButton color="dark" outline>Go to Listings</PageButton>
                </Link>
              </Col>
            </Row>
          <PageLines className="inside-white"/>
      </Container>
      <PageBlock>
          <Container>
            <PageSubheading className="inside-block">Homebrew</PageSubheading>
            <PageLines />
              <Row>
                <Col className="text-center" xs = "6">
                  <PageSubheading className="inside-block">Submit Homebrew:</PageSubheading>
                  <Link to="/members/submit-homebrew">
                    <PageButton color="light" outline>Go to Form</PageButton>
                  </Link>
                </Col>
                <Col className="text-center" xs = "6">
                  <PageSubheading className="inside-block">Homebrew Archive:</PageSubheading>
                  <Link to="/members/homebrew-archive">
                    <PageButton color="light" outline>Homebrew</PageButton>
                  </Link>
                </Col>
              </Row>
            <PageLines />
          </Container>
      </PageBlock>
      <Container>
        <Row>
          <Col className="text-center">
            <PageSubheading>Have questions or requests?</PageSubheading>
            <PageBody>If you have any suggestions, questions, or special requests, please contact us directly!</PageBody>
            <Link to="/contact">
              <PageButton color="dark" outline>Contact Us</PageButton>
            </Link>
            <p><br></br></p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Members;