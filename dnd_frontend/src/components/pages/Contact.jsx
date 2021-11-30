import React from "react";
import { Col, Container, Row,} from "reactstrap";
import { PageBio, PageBlock, PageBody, PageLines, PageSubheading, PageTitle } from "./PageElements";
import Andy from "./Resources/Andy.jpg";
import Charlie from "./Resources/Charlie.jpg";
import Hannah from "./Resources/Hannah.jpg";
import Phillip from "./Resources/Phillip.jpg";
import Spencer from "./Resources/Spencer.JPG";


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
            <Col xs="2"/>
            <Col xs="4" className="text-center">
              <img src={Charlie} width="40%"></img>
            </Col>
            <Col xs="4" className="text-left">
              <PageSubheading className="bio-text inside-block">Grace Gobbi</PageSubheading>
              <PageBody className="inside-block bio-text">
                <PageBio>
                  <li>Pronouns: She/Her</li>
                  <li>Email: gobbige@hendrix.edu</li>
                </PageBio>
              </PageBody>
            </Col>
          </Row>
          <PageLines/>
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
            <Col xs="2"/>
            <Col xs="4" className="text-center">
              <img src={Spencer} width="40%"></img>
            </Col>
            <Col xs="4" className="text-left">
              <PageSubheading className="bio-text">Spencer Thompson</PageSubheading>
              <PageBody className="bio-text">
                <PageBio>
                  <li>Pronouns: He/They</li>
                  <li>Email: thompsonjj@hendrix.edu</li>
                </PageBio>
              </PageBody>
            </Col>
          </Row>
          <PageLines className="inside-white"/>
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
            <Col xs="2"/>
            <Col xs="4" className="text-center">
              <img src={Hannah} width="40%"></img>
            </Col>
            <Col xs="4" className="text-left">
              <PageSubheading className="bio-text inside-block">Hannah Diggs</PageSubheading>
              <PageBody className="inside-block bio-text">
                <PageBio>
                  <li>Pronouns: She/Her</li>
                  <li>Email: diggshm@hendrix.edu</li>
                </PageBio>
              </PageBody>
            </Col>
          </Row>
          <PageLines />
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
            <Col xs="2"/>
            <Col xs="4" className="text-center">
              <img src={Phillip} width="40%"></img>
            </Col>
            <Col xs="4" className="text-left">
              <PageSubheading className="bio-text">Phillip Powell</PageSubheading>
              <PageBody className="bio-text">
                <PageBio>
                  <li>Pronouns: He/Him</li>
                  <li>Email: powellpa@hendrix.edu</li>
                </PageBio>
              </PageBody>
            </Col>
          </Row>
          <PageLines className="inside-white" />
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
            <Col xs="2"/>
            <Col xs="4" className="text-center">
              <img src={Charlie} width="40%"></img>
            </Col>
            <Col xs="4" className="text-left">
              <PageSubheading className="bio-text inside-block">Charlie Stewart</PageSubheading>
              <PageBody className="inside-block bio-text">
                <PageBio>
                  <li>Pronouns: They/Them</li>
                  <li>Email: stewartcr@hendrix.edu</li>
                </PageBio>
              </PageBody>
            </Col>
          </Row>
          <PageLines />
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
          <Col xs="2"/>
            <Col xs="4" className="text-center">
              <img src={Andy} width="40%"></img>
            </Col>
            <Col xs="4" className="text-left">
              <PageSubheading className="bio-text">Andy Vaught</PageSubheading>
              <PageBody className="bio-text">
                <PageBio>
                  <li>Pronouns: He/Him</li>
                  <li>Email: vaught@hendrix.edu</li>
                </PageBio>
              </PageBody>
            </Col>
          </Row>
          <PageLines className="inside-white"/>
        </Container>
      </PageBlock>
    </div>
  );
}

export default Contact;