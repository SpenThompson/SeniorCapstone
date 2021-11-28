import React from "react";
import { Col, Container, Row,} from "reactstrap";
import { PageBody, PageTitle } from "./PageElements";

function Members(){
  return (
    <div className="members">
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
              <PageTitle>Members</PageTitle>
            </Col>
          </Row>
      </Container>
          <div class="col-lg-5">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
    </div>
  );
}

export default Members;