import React, { useCallback, useState, useEffect } from "react";
import { Col, Container, Row,} from "reactstrap";
import { Link } from "react-router-dom";
import { PageBody, PageButton, PageLink, PageList, PageSubheading, PageTitle } from "./PageElements";
import axios from "axios";

function HomebrewList(){
  let [homebrews, setHomebrew] = useState('');
  
  const getData = useCallback(() => {
    axios
      .get("/api/homebrew/")
      .then((response) => {
        console.log(response.data)
        setHomebrew(response.data)
      })
      .catch((err) => console.log(err));
      }, [])

  useEffect(() => {
    getData()
  }, [getData]);

  const renderHomebrew = () => {
    return homebrews.map((item) => (
        <Container>
          <Row>
            <Col className="text-left">
              <PageSubheading className="list-text">
                {item.name}
              </PageSubheading>
            </Col>
          </Row>
          <Row>
            <Col xs="9" className="text-left">
              <PageBody>{item.type}</PageBody>
            </Col>
            <Col xs="3">
              <PageSubheading className="small">Author Info</PageSubheading>
            </Col>
          </Row>
          <Row>
            <Col xs="9" className="text-left">
              <PageBody>{item.description}</PageBody>
            </Col>
            <Col xs="3">
              <PageList>
                <li><u>Name:</u> {item.firstName} {item.lastName}</li>
                <li><u>Pronouns:</u> {item.pronouns}</li>
                <li><u>Email:</u> <PageLink href={"mailto: {item.email}"}>{item.email}</PageLink></li>
              </PageList>
            </Col>
          </Row>
        </Container>
    ));
  }

  return (
    <div className="homebrewlist">
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
              <PageTitle>Homebrew Archive</PageTitle>
            </Col>
          </Row>
          <Row>
            <Col className="text-right">
              <PageSubheading className="small">Want to submit your own?</PageSubheading>
              <Link to="/members/submit-homebrew">
                <PageButton color="dark" outline>Click Here</PageButton>
              </Link>
            </Col>
          </Row>
      </Container>
      {renderHomebrew}
    </div>
  );
}

export default HomebrewList;