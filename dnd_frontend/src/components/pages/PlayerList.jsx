import React, {useCallback, useState, useEffect} from "react";
import { Col, Container, Row,} from "reactstrap";
import { Link } from "react-router-dom";
import PlayerListing from "./PlayerListing";
import { PageBlock, PageButton, PageLines, PageSubheading, PageTitle } from "./PageElements";
import axios from "axios";

function PlayerList(){
  const [players, setPlayers] = useState([]);

  const getData = useCallback(() => {
    axios
      .get("/api/players/")
      .then((response) => {
        setPlayers(response.data)
      })
      .catch((err) => console.log(err));
      }, [])
  useEffect(() => {
    getData()
  }, [getData]); 

  return (
    <div className="playerlist">
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
              <PageTitle>Available Players</PageTitle>
            </Col>
          </Row>
          <Row>
            <Col className="text-right">
              <PageSubheading className="small">Want to put up your own listing?</PageSubheading>
              <Link to="/members/looking-for-game">
                <PageButton color="dark" outline>Click Here</PageButton>
              </Link>
            </Col>
          </Row>
      </Container>
      <PageLines className="inside-white"/>
      <PageBlock className="but-white">
          <PlayerListing entries={players}/>
      </PageBlock>
      <PageLines className="inside-white"/>
    </div>
  );
}

export default PlayerList;