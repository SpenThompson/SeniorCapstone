import React, { useEffect, useState } from "react";
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
import axios from "axios";

function GameForm(){
  const [game, setGame] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [pronouns, setPronouns] = useState("");
  const [email, setEmail] = useState("");
  const [experience, setExperience] = useState("");
  const [contentWarnings, setContentWarnings] = useState("");
  const [contentAllowed, setContentAllowed] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
      axios.get("/api/games/1").then((response) => {
        setGame(response.data);
      });
  }, [])

  const handleFirstName = (e) => {
      setFirstName(e.target.value);
  }

  const handleLastName = (e) => {
      setLastName(e.target.value);
  }

  const handlePronouns = (e) => {
      setPronouns(e.target.value);
  }

  const handleEmail = (e) => {
      setEmail(e.target.value);
  }

  const handleExperience = (e) => {
      setExperience(e.target.value);
  }

  const handleContentWarnings = (e) => {
      setContentWarnings(e.target.value);
  }

  const handleContentAllowed = (e) => {
      setContentAllowed(e.target.value);
  }

  const handleDescription = (e) => {
      setDescription(e.target.value);
  }

  const handleSubmit = () => {
    axios
     .post("/api/games/", {
        firstName: firstName,
        lastName: lastName,
        pronouns: pronouns,
        email: email,
        experience: experience,
        contentWarnings: contentWarnings,
        contentAllowed: contentAllowed,
        description: description
     })
     .then((response) => {
         setGame(response.data)
     });
  }

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
        <Form onSubmit={handleSubmit}>
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
                    onChange={handleFirstName}
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
                    onChange={handleLastName}
                    />
                </Col>
                <Col xs="2">
                    <Label for="pronouns">Pronouns</Label>
                    <Input
                    type="select"
                    name="pronouns"
                    id="pronouns"
                    onChange={handlePronouns}
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
                    onChange={handleEmail}
                        />
                </Col>
                <Col xs="5">
                    <Label for="experience">Experience Level</Label>
                    <Input
                    type="select"
                    name="experience"
                    id="experience"
                    onChange={handleExperience}
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
                    onChange={handleContentWarnings}
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
                    onChange={handleContentAllowed}
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
                    onChange={handleDescription}
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
                    <Button type="submit" color="dark" outline>
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