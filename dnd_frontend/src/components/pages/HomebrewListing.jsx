import React from "react";
import { Col, Container, Row,} from "reactstrap";
import {  PageBody, PageLink, PageList, PageSubheading, } from "./PageElements";

export default function HomebrewListing(props) {
    const {entries} = props
    if (entries.length > 0){
      return(
        entries.map((entry) => {
          const emailLink = "mailto: " + entry.email
          return(
            <Container>
              <Row>
                <Col xs="1"/>
                <Col className="text-left">
                  <PageSubheading className="list-text">
                    {entry.name}
                  </PageSubheading>
                </Col>
              </Row>
              <Row>
                <Col xs="1" />
                <Col xs="6" className="text-left">
                  <PageBody className="no-margin"><u>Type:</u> {entry.type}</PageBody>
                </Col>
                <Col xs="4">
                  <PageSubheading className="small">Author Info</PageSubheading>
                </Col>
                <Col xs="1" />
              </Row>
              <Row>
                <Col xs="1" />
                <Col xs="6" className="text-left">
                  <PageBody className="no-margin"><u>Description: </u>{entry.description}</PageBody>
                </Col>
                <Col xs="4">
                  <PageList>
                    <li><u>Name:</u> {entry.firstName} {entry.lastName}</li>
                    <li><u>Pronouns:</u> {entry.pronouns}</li>
                    <li><u>Email:</u> <PageLink className="inside-white" href={emailLink}>{entry.email}</PageLink></li>
                  </PageList>
                </Col>
                <Col xs="1" />
              </Row>
            </Container>
          )
        })
      )
    }
    else{
      return(<PageBody>Something went wrong, please refresh the page</PageBody>)
    }

}
