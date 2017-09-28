import React from 'react';
import '../styles/App.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class Register extends React.Component {
  render() {
    return (
      <div className="container">
          <Form>
            <FormGroup>
              <Label for="exampleEmail">Name</Label>
              <Input type="text" name="name" id="exampleEmail" placeholder="Name" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input type="password" name="password" id="examplePassword" placeholder="Password" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleText">Text Area</Label>
              <Input type="textarea" name="text" id="exampleText" />
            </FormGroup>
            <Button color="primary">Submit</Button>
          </Form>
      </div>
    );
  }
}
