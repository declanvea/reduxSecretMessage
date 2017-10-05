import React from 'react';
import '../styles/App.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchRegister} from '../actions';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Register extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
    message: ''
  }

  handle = field => e => this.setState({[field]: e.target.value})

  handleSubmit = e => {
    e.preventDefault();
  this.props.fetchRegister(this.state.name, this.state.email, this.state.password, this.state.message)
  }

  render() {
    return (
      <div className="container">
          <Form>
            <FormGroup>
              <Label for="exampleEmail">Name</Label>
              <Input onChange={this.handle('name')} value={this.state.name} type="text" name="name" id="exampleEmail" placeholder="Name" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input onChange={this.handle('email')} value={this.state.email} type="email" name="email" id="exampleEmail" placeholder="something@idk.cool" />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input onChange={this.handle('password')} value={this.state.password} type="password" name="password" id="examplePassword" placeholder="Password" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleText">Text Area</Label>
              <Input onChange={this.handle('message')} value={this.state.message} type="textarea" name="message" id="exampleText" />
            </FormGroup>
            <Button onClick={this.handleSubmit} color="primary">Submit</Button>
          </Form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchRegister}, dispatch)
}

export default connect(null, mapDispatchToProps)(Register);
