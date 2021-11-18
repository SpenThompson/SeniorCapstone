import React from "react";
import {
    Button,
    Col,
    Form,
    FormGroup,
    Input,
    Label,
    Row
} from "reactstrap";

function HomebrewForm(){
  return (
    <div className="homebrewform">
      <div class="container">
        <div class="row align-items-center my-5">
            <h1 class="font-weight-light">Submit Homebrew</h1>
        </div>
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
                                She/Her
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
            </FormGroup>
        </Form>
      </div>
    </div>
  );
}

export default HomebrewForm;