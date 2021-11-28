import React from "react";
import { Col, Container, Row,} from "reactstrap";
import { PageBody, PageBlock, PageCarousel, PageLines, PageTitle } from "./PageElements";
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
            <PageTitle>Home</PageTitle>
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
              <PageLines />
              <Row>
                <PageBody className="inside-block">
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy text
                  ever since the 1500s, when an unknown printer took a galley of
                  type and scrambled it to make a type specimen book.
                </PageBody>
              </Row>
              <PageLines />
            </Container>
          </PageBlock>
    </div>
  );
}

export default Home;