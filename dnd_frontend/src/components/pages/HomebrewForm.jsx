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
import axios from "axios";
import { PageBody, PageLines, PageTitle } from "./PageElements";

function HomebrewForm(){
  const [homebrew, setHomebrew] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [pronouns, setPronouns] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
      axios.get("/api/homebrew/1").then((response) => {
          setHomebrew(response.data);
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

  const handleType = (e) => {
    setType(e.target.value);
  }

  const handleName = (e) => {
    setName(e.target.value);
  }

  const handleDescription = (e) => {
    setDescription(e.target.value);
  }

  const handleSubmit = () => {
    axios
     .post("/api/homebrew/", {
         firstName: firstName,
         lastName: lastName,
         pronouns: pronouns,
         email: email,
         type: type,
         name: name,
         description: description
     })
  }

  return (
    <div className="homebrewform">
      <Container>
        < Row>
            <p><br></br></p>
        </Row>
        <Col md={{
            offset: 3,
            size: 6
            }}
            sm="12">
            <PageTitle>Submit Homebrew</PageTitle>
        </Col>
        <Row>
            <Col className="text-center">
                <PageBody>Interested in archiving your Homebrew with the Hendrix D&D Club?  Fill out this form and our moderators will work to publish!</PageBody>
                <PageLines className="inside-white"/>
            </Col>
        </Row>
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Row>
                    <Col xs="1" />
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
                                Please Select
                            </option>
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
                    <Col>
                        <Label for="email">Email</Label>
                        <Input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="YourEmail@hendrix.edu"
                        onChange={handleEmail}
                            />
                        <div>
                            <p> </p>
                        </div>
                    </Col>
                    <Col xs="1"/>
                </Row>
                <Row>
                    <Col xs="1"/>
                    <Col xs="4">
                        <Label for="type">Type of Homebrew</Label>
                        <Input
                        type="select"
                        name="type"
                        id="type"
                        onChange={handleType}
                        >
                            <option>
                                Please Select
                            </option>
                            <option>
                                Race/Subrace
                            </option>
                            <option>
                                Background
                            </option>
                            <option>
                                Feat
                            </option>
                            <option>
                                Subclass
                            </option>
                            <option>
                                Magic Item
                            </option>
                            <option>
                                Spell
                            </option>
                            <option>
                                Monster
                            </option>
                        </Input>
                    </Col>
                    <Col xs="6">
                        <Label for="name">Name of Homebrew</Label>
                        <Input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Homebrew Name"
                        maxLength="20"
                        onChange={handleName}
                            />
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
                        placeholder="Give a description of your homebrew..."
                        maxLength="500"
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
                        <Button color="dark" type="submit" outline>
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

export default HomebrewForm;