import React from "react";
import { Col, Container, Row,} from "reactstrap";
import { PageBio, PageBlock, PageBody, PageLines, PageLink, PageSubheading, PageTitle } from "./PageElements";
import Andy from "./Resources/Andy.jpg";
import Charlie from "./Resources/Charlie.jpg";
import Grace from "./Resources/Grace.jpg";
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
              <img src={Grace} width="60%"></img>
            </Col>
            <Col className="text-left">
              <PageSubheading className="bio-text inside-block">Grace Gobbi</PageSubheading>
              <PageBody className="inside-block bio-text">
                <PageBio>
                  <li><u>Pronouns:</u> She/Her</li>
                  <li><u>Email:</u> <PageLink href={"mailto: gobbige@hendrix.edu"}>gobbige@hendrix.edu</PageLink></li>
                  <li><u>Major:</u> Sociology</li>
                  <li>My favorite class is barbarian and I love getting to play ridiculous characters</li>
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
              <img src={Spencer} width="60%"></img>
            </Col>
            <Col className="text-left">
              <PageSubheading className="bio-text">Spencer Thompson</PageSubheading>
              <PageBody className="bio-text">
                <PageBio>
                  <li><u>Pronouns:</u> He/They</li>
                  <li><u>Email:</u> <PageLink className="inside-white" href={"mailto: thompsonjj@hendrix.edu"}>thompsonjj@hendrix.edu</PageLink></li>
                  <li><u>Majors:</u> Computer Science and English (Film)</li>
                  <li>My favorite classes are Artificer and Sorcerer, and I’m always happy to DM for my friends.  I love the opportunities D&D provides for escapism to a world where things don’t have to matter as much.</li>
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
              <img src={Hannah} width="60%"></img>
            </Col>
            <Col className="text-left">
              <PageSubheading className="bio-text inside-block">Hannah Diggs</PageSubheading>
              <PageBody className="inside-block bio-text">
                <PageBio>
                  <li><u>Pronouns:</u> She/Her</li>
                  <li><u>Email:</u> <PageLink href={"mailto: diggshm@hendrix.edu"}>diggshm@hendrix.edu</PageLink></li>
                  <li><u>Majors:</u> History and English (Creative Writing)</li>
                  <li>I love playing a lawful neutral bard that tries to make every other character fall in love with them.  I started playing D&D virtually over the pandemic, so I love its ability to bring people together!</li>
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
              <img src={Phillip} width="60%"></img>
            </Col>
            <Col className="text-left">
              <PageSubheading className="bio-text">Phillip Powell</PageSubheading>
              <PageBody className="bio-text">
                <PageBio>
                  <li><u>Pronouns:</u> He/Him</li>
                  <li><u>Email:</u> <PageLink className="inside-white" href={"mailto: powellpa@hendrix.edu"}>powellpa@hendrix.edu</PageLink></li>
                  <li><u>Major:</u> Politics, with History Minor</li>
                  <li>I love playing D&D because of all the stories I get to create with my friends.  I especially love DMing because I get to put all my years as a certified thater kid to work playing outrageous characters.</li>
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
              <img src={Charlie} width="60%"></img>
            </Col>
            <Col className="text-left">
              <PageSubheading className="bio-text inside-block">Charlie Stewart</PageSubheading>
              <PageBody className="inside-block bio-text">
                <PageBio>
                  <li><u>Pronouns:</u> They/Them</li>
                  <li><u>Email:</u> <PageLink href={"mailto: stewartcr@hendrix.edu"}>stewartcr@hendrix.edu</PageLink></li>
                  <li><u>Major:</u> Psychology, with English Film Minor</li>
                  <li>I love DMing and playing a bard, and my favorite thing about D&D is the ability to create a whole new world and laughing with my friends over ridiculous characters and situations</li>
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
              <img src={Andy} width="60%"></img>
            </Col>
            <Col className="text-left">
              <PageSubheading className="bio-text">Andy Vaught</PageSubheading>
              <PageBody className="bio-text">
                <PageBio>
                  <li><u>Pronouns:</u> He/Him</li>
                  <li><u>Email:</u> <PageLink className="inside-white" href={"mailto: vaught@hendrix.edu"}>vaught@hendrix.edu</PageLink></li>
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