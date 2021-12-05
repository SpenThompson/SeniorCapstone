import React from "react";
import { Col, Container, Row,} from "reactstrap";
import { Link } from "react-router-dom";
import { PageBlock, PageBody, PageBreak, PageButton, PageLines, PageLink, PageList, PageSubheading, PageTitle } from "./PageElements";
import Constitution from "./Resources/D&D Club Constitution.pdf";

function Information(){
  return (
    <div className="information">
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
              <PageTitle>Information</PageTitle>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <PageBody>
                Interested in the club?  Here's the most need-to-know information:
              </PageBody>
            </Col>
          </Row>
      </Container>
      <PageBlock>
        <Container>
          <Row>
            <Col className="text-center">
              <PageSubheading className="inside-block">Our Goals</PageSubheading>
              <PageLines />
              <PageBody className="inside-block">What do we strive to do?
                <PageBreak />
                <PageList>
                  <li>Ease the bar of entry to D&D 5e and other TTRPGs through teaching</li>
                  <li>Provide resources to make games more financially accessible</li>
                  <li>Promote Community among Hendrix players</li>
                  <li>Archive materials made by the Hendrix community</li>
                </PageList>
              </PageBody>
              <PageLines />
            </Col>
          </Row>
        </Container>
      </PageBlock>
      <PageBlock className="but-white">
        <Container>
          <Row>
            <Col className="text-center">
              <PageSubheading>Membership Requirements</PageSubheading>
              <PageLines className="inside-white" />
              <PageBody>To be a member of the Hendrix D&D Club, you must:
                <PageBreak />
                <PageList>
                  <li>Fill Out the <PageLink className="inside-white" href={"https://forms.gle/N78DPtMRbvnS6pWe9"} target="_blank" rel="noreferrer">Interest Form</PageLink> as completely as possible</li>
                  <li>Attend at least one of our meetings or events, which you will be notified of through email</li>
                  <li>And you're done!  All of the D&D Club's resources are open to you!</li>
                </PageList>
              </PageBody>
              <PageLines className="inside-white" />
            </Col>
          </Row>
        </Container>
      </PageBlock>
      <PageBlock>
        <Container>
          <Col className="text-center">
            <PageSubheading className="inside-block">Officer Requirements</PageSubheading>
            <PageLines />
            <PageBody className="inside-block">To run for an officer position in the Hendrix D&D Club, you must:
              <PageBreak />
              <PageList>
                <li>Be a fully-fledged member of the D&D Club</li>
                <li>Attend at least three of our meetings or events</li>
                <li>Submit your intention to run for your desired position</li>
                <li>Campaign!</li>
                <li>Once the election occurs, the results will be released!</li>
              </PageList>
            </PageBody>
            <PageLines />
          </Col>
        </Container>
      </PageBlock>
      <PageBlock className="but-white">
        <Container>
          <Row>
            <Col className="text-center">
              <PageSubheading>Further Questions?</PageSubheading>
              <PageLines className="inside-white" />
              <PageBody>Have any questions that are unanswered?  Check out or consitution, or contact us directly!</PageBody>
            </Col>
          </Row>
          <Row>
            <Col xs = "6" className="text-center">
              <PageSubheading>Constitution</PageSubheading>
              <a href={Constitution} target="_blank">
                <PageButton color="dark" outline>
                  Download PDF
                </PageButton>
              </a>
            </Col>
            <Col xs = "6" className="text-center">
              <PageSubheading>Contact Us</PageSubheading>
              <Link to="/contact">
                <PageButton color="dark" outline>
                  Go to Page
                </PageButton>
              </Link>
            </Col>
          </Row>
          <PageLines className="inside-white"/>
          <p><br></br></p>
        </Container>
      </PageBlock>
      </div>
  );
}

export default Information;