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
import { PageBody, PageTitle } from "./PageElements";

function PlayerForm(){
  return (
    <div className="playerform">
      <Container>
        <Row>
            <p><br></br></p>
        </Row>
        <Col md={{
                offset: 3,
                size: 6
                }}
                sm="12">
            <PageTitle>Looking for Game</PageTitle>
        </Col>
        <Form>
            <FormGroup>
            <Row>
                    <Col xs="5">
                        <Label for="firstName">First Name</Label>
                        <Input
                        type="text"
                        name="firstName"
                        id="firstName"
                        placeholder="Enter your first name"
                            />
                    </Col>
                    <Col xs="5">
                        <Label for="lastName">Last Name</Label>
                        <Input
                        type="text"
                        name="lastName"
                        id="lastName"
                        placeholder="Enter your last name"
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
                </Row>
                <Row>
                    <Col xs="6">
                        <Label for="email">Email</Label>
                        <Input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="YourEmail@hendrix.edu"
                            />
                    </Col>
                    <Col xs="6">
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
                </Row>
                <Row>
                    <Col>
                        <Label for="contentWarnings">Content Warnings</Label>
                        <Input
                        type="textarea"
                        name="contentWarnings"
                        id="contentWarnings"
                        placeholder="Please enter any material you would not like in your game"
                            />
                    </Col>
                </Row>
                <div>
                    <p> </p>
                </div>
                <Button>
                    Submit
                </Button>
            </FormGroup>
        </Form>
      </Container>
    </div>
  );
}

export default PlayerForm;