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

function PlayerForm(){
  const [player, setPlayer] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [pronouns, setPronouns] = useState("");
  const [email, setEmail] = useState("");
  const [experience, setExperience] = useState("");
  const [contentWarnings, setContentWarnings] = useState("");

  useEffect(() => {
    axios.get("/api/players/1").then((response) => {
      setPlayer(response.data);
    });
  }, [])

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };

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

  const handleSubmit = () => {
    axios
     .post("/api/players/", {
        firstName: firstName,
        lastName: lastName,
        pronouns: pronouns,
        email: email,
        experience: experience,
        contentWarnings: contentWarnings
     })
     .then((response) => {
         setPlayer(response.data)
     });
  }

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
        <Row>
            <Col className="text-center">
                <PageBody>Interested in playing but having a hard time finding a DM?  Fill out this form and watch your email!</PageBody>
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
                    placeholder="Please enter any material you would not like in your game"
                    onChange={handleContentWarnings}
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

export default PlayerForm;