import React from "react";
import { Col, Container, Row,} from "reactstrap";
import {  PageBody, PageLink, PageList, PageSubheading, } from "./PageElements";

export default function GameListing(props) {
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
                    {entry.firstName} {entry.lastName}
                  </PageSubheading>
                </Col>
              </Row>
              <Row>
                <Col xs="1"/>
                <Col className="text-left" xs="4">
                  <PageBody className="no-margin">
                    <PageList>
                        <li><u>Pronouns:</u> {entry.pronouns}</li>
                        <li><u>Email:</u> <PageLink className="inside-white" href={emailLink}>{entry.email}</PageLink></li>
                        <li><u>Experience Level:</u> {entry.experience}</li>
                    </PageList>
                  </PageBody>
                </Col>
                <Col className="text-left" xs="6">
                  <PageBody className="no-margin">
                      <PageList>
                          <li><u>Content Warnings:</u> {entry.contentWarnings}</li>
                          <li><u>Content Allowed:</u> {entry.contentAllowed}</li>
                          <li><u>Description:</u> {entry.description}</li>
                      </PageList>
                  </PageBody>
                </Col>
                <Col xs="1"/>
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
