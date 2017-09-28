import React from 'react';
import '../styles/App.css';
import { Jumbotron, Button } from 'reactstrap';
import {NavLink} from 'react-router-dom';

export default class Home extends React.Component {
  render() {
    return (
      <div>
      <Jumbotron style={{backgroundColor:'pink'}}>
             <h1 className="display-3">Ready to keep a secret?!</h1>
             <p className="lead"></p>
             <hr className="my-2" />
             <p></p>
             <p className="lead">
              <NavLink to="/register"><Button color="danger">Register</Button></NavLink>
              <NavLink to="/login"><Button color="primary">Login</Button></NavLink>
             </p>
           </Jumbotron>
      </div>
    );
  }
}
