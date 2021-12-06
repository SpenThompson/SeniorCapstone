import React, {useCallback, useState, useEffect} from "react";
import { Col, Container, Row,} from "reactstrap";
import { Link } from "react-router-dom";
import GameListing from "./GameListing";
import { PageBlock, PageButton, PageLines, PageSubheading, PageTitle } from "./PageElements";
import axios from "axios";

function GameList(){
  const [games, setGames] = useState([]);

  const getData = useCallback(() => {
    axios
      .get("/api/games/")
      .then((response) => {
        setGames(response.data)
      })
      .catch((err) => console.log(err));
      }, [])
  useEffect(() => {
    getData()
  }, [getData]);

  return (
    <div className="gamelist">
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
              <PageTitle>Open Games</PageTitle>
            </Col>
          </Row>
          <Row>
            <Col className="text-right">
              <PageSubheading className="small">Want to post about your own game?</PageSubheading>
              <Link to="/members/looking-for-players">
                <PageButton color="dark" outline>Click Here</PageButton>
              </Link>
            </Col>
          </Row>
      </Container>
      <PageLines className="inside-white"/>
      <PageBlock className="but-white">
        <GameListing entries={games}/>
      </PageBlock>
      <PageLines className="inside-white"/>
    </div>
  );
}

export default GameList;