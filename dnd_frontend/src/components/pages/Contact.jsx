import React from "react";
import { Col, Container, Row,} from "reactstrap";
import { PageBlock, PageBody, PageLines, PageSubheading, PageTitle } from "./PageElements";

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