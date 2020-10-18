import React, { Component } from 'react';
import AvailableTimes from 'react-available-times';
import './css/PickTime.css';
import { Button, Form, FormGroup, Label, Input, FormText, Col, Row } from 'reactstrap';
import { Link } from "react-router-dom";
import axios from 'axios';
const data = {"name": "Alex"};
class PickTime extends Component {

  constructor(){
    super()
    this.state = {
      userData: {
                  "major": null,
                  "hobby": null,
                  "worktime": null,
                  "schoolyear": null,
                },
      major: 'Major not Yet Determined',
      hobby: 'Hobby not Yet Determined',
      worktime: 'Worktime not Yet Determined',
      schoolYear: 'school Year not yet determined',
      freeTime: {},
    };
    this.consoleLogs = this.consoleLogs.bind(this);
    this.changeMajor = this.changeMajor.bind(this);
  };

    consoleLogs(){
      console.log('here is major ' + this.state.major);
      console.log('here is hobby ' + this.state.hobby);
      console.log('here is hours ' + this.state.hours);
      console.log('here is school year ' + this.state.schoolYear);
    }

    changeMajor(e){
      this.setState({
        major: e
      });
    };
    changeHobby(e){
      this.setState({
        hobby: e
      });
    };
    changeHours(e){
      this.setState({
        hours: e
      });
    };
    changeschoolYear(e){
      this.setState({
        schoolYear: e
      });
    };

    componentDidMount = () => {
      axios.post('./profile', { data }).then(response => {
        console.log(response);
      })
    };

  render() {
    return (
      <div className="pick-time">
      <div className="welcome-text-2">
        <h3>
        <span className="grey-text">Let's start out with</span>  some
        information on your interests.
        </h3>
      </div>
      <div className="form-submission">
        <Form>
        <Row form>
          <Col md={6}>
            <FormGroup>
            <Label className="title" for="exampleSelect">Major</Label>
            <Input type="select" name="select" id="exampleSelect" value={this.state.major} onChange={e => this.changeMajor(e.target.value)}>
              <option>Business</option>
              <option>ACMS</option>
              <option>Informatics</option>
              <option>CSE</option>
            </Input>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
            <Label className="title" for="exampleSelect">Hobby</Label>
            <Input type="select" name="select" id="exampleSelect" value={this.state.hobby} onChange={e => this.changeHobby(e.target.value)}>
              <option>Outdoors</option>
              <option>Arts & Crafts</option>
              <option>Music</option>
              <option>Movies</option>
            </Input>
            </FormGroup>
          </Col>
        </Row>
        </Form>
      </div>
        <div className="pick-hours">
          <h5>Weekly Study Hours</h5>
          <FormGroup className="formGroup2">
            <Label className="title" for="exampleSelect" hidden>Hours</Label>
            <Input type="select" name="select" id="exampleSelect" value={this.state.hours} onChange={e => this.changeHours(e.target.value)}>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5+</option>
            </Input>
            </FormGroup>
            <h5>Current Year</h5>
            <FormGroup className="formGroup2">
              <Label className="title" for="exampleSelect" hidden>School Year</Label>
              <Input type="select" name="select" id="exampleSelect" value={this.state.schoolYear} onChange={e => this.changeschoolYear(e.target.value)}>
                <option>Freshman</option>
                <option>Sophomore</option>
                <option>Junior</option>
                <option>Senior</option>
              </Input>
              </FormGroup>
        </div>
        <Link to="/Success">
          <Button color="info">All Done!</Button>
        </Link>
        <Link to="/">
          <Button>Go Back</Button>
        </Link>
      </div>
    );
  }
}

export default PickTime;
