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

function HomebrewForm(){
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
                    <Col>
                        <Label for="email">Email</Label>
                        <Input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="YourEmail@hendrix.edu"
                            />
                        <div>
                            <p> </p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs="4">
                        <Label for="type">Type of Homebrew</Label>
                        <Input
                        type="select"
                        name="type"
                        id="type"
                        >
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
                    <Col xs="8">
                        <Label for="name">Name of Homebrew</Label>
                        <Input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Homebrew Name"
                            />
                    </Col>
                </Row>
                <Label for="description">Description</Label>
                <Input
                type="textarea"
                name="description"
                id="description"
                placeholder="Give a description of your homebrew..."
                    />
                <div>
                    <p> </p>
                </div>
                <Button>
                    Submit
                </Button>
                <PageLines className="inside-white" />
            </FormGroup>
        </Form>
      </Container>
    </div>
  );
}

export default HomebrewForm;