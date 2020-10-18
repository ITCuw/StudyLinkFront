import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './css/Login.css';

class Home extends Component {
  render() {
    return (
      <div  className="welcome-text">
          <h3>
          <span className="grey-text">Hey this is Professor Lee,</span> let's take 2 minutes to create the best
          study groups for our class.
          </h3>
        <FormGroup className="formGroup">
          <Label for="exampleEmail" hidden>Your Email</Label>
          <Input className="email" type="email" name="email" id="email" placeholder="username@uw.edu" />
          <Label for="exampleEmail" hidden>Password</Label>
          <Input className="password" type="password" name="password" id="password" placeholder="**********" />
        </FormGroup>
        <Link to="/Picktime">
          <Button color="info">Continue</Button>
        </Link>
      </div>
    );
  }
}

export default Home;
