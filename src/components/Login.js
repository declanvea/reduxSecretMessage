import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class Login extends React.Component {
  render(){
    return (
      <div className="container">
          <Form inline>
            <FormGroup style={{margin:'15px'}}>
              <Label style={{margin:'5px'}}>Email</Label>{' '}
              <Input type="email" name="email" id="exampleEmail" placeholder="something@idk.cool" />
            </FormGroup>
            {' '}
            <FormGroup>
              <Label style={{margin:'5px'}}>Password</Label>{' '}
              <Input type="password" name="password" id="examplePassword" placeholder="don't tell!" />
            </FormGroup>
            {' '}
            <Button style={{margin:'15px'}}>Submit</Button>
          </Form>
      </div>
    )
  }
}
