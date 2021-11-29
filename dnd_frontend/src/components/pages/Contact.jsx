import React from "react";
import { Col, Container, Row,} from "reactstrap";
import { PageBlock, PageBody, PageLines, PageSubheading, PageTitle } from "./PageElements";
import Charlie from "./Resources/Charlie.jpg";
import Hannah from "./Resources/Hannah.jpg";
import Phillip from "./Resources/Phillip.jpg";

function Contact(){
  return (
    <div className="contact">
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
              <PageTitle>Contact Us</PageTitle>
              <PageBody>Meet the people that run the club!</PageBody>
            </Col>
          </Row>
      </Container>
      <PageBlock>
        <Container>
          <Row>
            <Col className="text-center">
              <PageSubheading className="inside-block">President</PageSubheading>
              <PageLines/>
            </Col>
          </Row>
          <Row>

          </Row>
        </Container>
      </PageBlock>
      <PageBlock className="but-white">
        <Container>
          <Row>
            <Col className="text-center">
              <PageSubheading>Vice President</PageSubheading>
              <PageLines className="inside-white"/>
            </Col>
          </Row>
          <Row>

          </Row>
        </Container>
      </PageBlock>
      <PageBlock>
        <Container>
          <Row>
            <Col className="text-center">
              <PageSubheading className="inside-block">Secretary</PageSubheading>
              <PageLines />
            </Col>
          </Row>
          <Row>
            <Col xs="6" className="text-center">
              <img src={Hannah} width="40%"></img>
            </Col>
            <Col xs="6" className="text-left">
              <PageSubheading className="inside-block">Hannah Diggs</PageSubheading>
            </Col>
          </Row>
        </Container>
      </PageBlock>
      <PageBlock className="but-white">
        <Container>
          <Row>
            <Col className="text-center">
              <PageSubheading>Treasurer</PageSubheading>
              <PageLines className="inside-white"/>
            </Col>
          </Row>
          <Row>
            <Col xs="6" className="text-center">
              <img src={Phillip} width="50%"></img>
            </Col>
            <Col xs="6" className="text-left">
              <PageSubheading>Phillip Powell</PageSubheading>
            </Col>
          </Row>
        </Container>
      </PageBlock>
      <PageBlock>
        <Container>
          <Row>
            <Col className="text-center">
              <PageSubheading className="inside-block">Publicist</PageSubheading>
              <PageLines />
            </Col>
          </Row>
          <Row>
            <Col xs="6" className="text-center">
              <img src={Charlie} width="40%"></img>
            </Col>
            <Col xs="6" className="text-left">
              <PageSubheading className="inside-block">Charlie Stewart</PageSubheading>
            </Col>
          </Row>
        </Container>
      </PageBlock>
      <PageBlock className="but-white">
        <Container>
          <Row>
            <Col className="text-center">
              <PageSubheading>Advisor</PageSubheading>
              <PageLines className="inside-white" />
            </Col>
          </Row>
          <Row>

          </Row>
        </Container>
      </PageBlock>
    </div>
  );
}

export default Contact;