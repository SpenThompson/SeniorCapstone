import React, { useCallback, useState, useEffect } from "react";
import { Col, Container, Row,} from "reactstrap";
import { Link } from "react-router-dom";
import HomebrewListing  from "./HomebrewListing";
import { PageBlock, PageButton, PageLines, PageSubheading, PageTitle } from "./PageElements";
import axios from "axios";

function HomebrewList(){
  const [homebrews, setHomebrew] = useState([]);
  
  const getData = useCallback(() => {
    axios
      .get("/api/homebrew/")
      .then((response) => {
        setHomebrew(response.data)
      })
      .catch((err) => console.log(err));
      }, [])
  useEffect(() => {
    getData()
  }, [getData]);

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
      <PageLines className="inside-white"/>
      <PageBlock className="but-white">
        <HomebrewListing entries={homebrews}/>
      </PageBlock>
      <PageLines className="inside-white"/>
    </div>
  );
}

export default HomebrewList;