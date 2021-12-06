import React from "react";
import {
    Button,
    Col,
    Container,
    Form,
    FormGroup,
    Input,
    Label,
    Row
} from "reactstrap";
import { PageBody, PageLines, PageTitle } from "./PageElements";

function GameForm(){
  return (
    <div className="gameform">
      <Container>
          <Row>
            <p><br></br></p>
          </Row>
        <Col md={{
            offset: 3,
            size: 6
            }}
            sm="12">
            <PageTitle>Looking for Players</PageTitle>
        </Col>
        <Row>
            <Col className="text-center">
                <PageBody>Have a game but having a hard time finding players?  Please fill out this form and pay attention to your email!</PageBody>
                <PageLines className="inside-white"/>
            </Col>
        </Row>
        <Form>
            <FormGroup>
            <Row>
                <Col xs="1"/>
                <Col xs="4">
                    <Label for="firstName">First Name</Label>
                    <Input
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="Enter your first name..."
                    maxLength="20"
                        />
                </Col>
                <Col xs="4">
                    <Label for="lastName">Last Name</Label>
                    <Input
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Enter your last name..."
                    maxLength="30"
                    />
                </Col>
                <Col xs="2">
                    <Label for="pronouns">Pronouns</Label>
                    <Input
                    type="select"
                    name="pronouns"
                    id="pronouns"
                    >
                        <option>
                            He/Him
                        </option>
                        <option>
                            He/They
                        </option>
                        <option>
                            She/Her
                        </option>
                        <option>
                            She/They
                        </option>
                        <option>
                            They/Them
                        </option>
                        <option>
                            Please Ask
                        </option>
                    </Input>
                </Col>
                <Col xs="1"/>
            </Row>
            <Row>
                <Col xs="1"/>
                <Col xs="5">
                    <Label for="email">Email</Label>
                    <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="YourEmail@hendrix.edu"
                        />
                </Col>
                <Col xs="5">
                    <Label for="experience">Experience Level</Label>
                    <Input
                    type="select"
                    name="experience"
                    id="experience"
                    >
                        <option>
                            Rookie
                        </option>
                        <option>
                            Novice
                        </option>
                        <option>
                            Moderate
                        </option>
                        <option>
                            Proficient
                        </option>
                        <option>
                            Expert
                        </option>
                    </Input>
                </Col>
                <Col xs="1"/>
            </Row>
            <Row>
                <Col xs="1"/>
                <Col>
                    <Label for="contentWarnings">Content Warnings</Label>
                    <Input
                    type="textarea"
                    name="contentWarnings"
                    id="contentWarnings"
                    placeholder="Enter any possibly triggering material you have planned for your game..."
                    maxLength="100"
                        />
                </Col>
                <Col xs="1"/>
            </Row>
            <Row>
                <Col xs="1"/>
                <Col>
                    <Label for="contentAllowed">Content Allowed</Label>
                    <Input
                    type="select"
                    name="contentAllowed"
                    id="contentAllowed"
                    >
                        <option>
                            All Allowed
                        </option>
                        <option>
                            All Published, Homebrew Approval
                        </option>
                        <option>
                            All WOC Published Only
                        </option>
                        <option>
                            Specific Books Only
                        </option>
                    </Input>
                </Col>
                <Col xs="1"/>
            </Row>
            <Row>
                <Col xs="1"/>
                <Col xs="10">
                    <Label for="description">Description</Label>
                    <Input
                    type="textarea"
                    name="description"
                    id="description"
                    placeholder="Give a short description of your game..."
                    maxLength="300"
                        />
                </Col>
                <Col xs="1"/>
            </Row>
            <div>
                <p> </p>
            </div>
            <Row>
                <Col xs="1"/>
                <Col>
                    <Button>
                        Submit
                    </Button>
                </Col>
                <Col xs="1"/>
            </Row>
            <PageLines className="inside-white" />
            </FormGroup>
        </Form>
      </Container>
    </div>
  );
}

export default GameForm;