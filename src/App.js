import React from 'react';
import logo from './logo.svg';
import Login from './Components/Login';
import PickTime from './Components/PickTime';
import Success from './Components/Success';
import {Route, BrowserRouter as Router, Link } from "react-router-dom";
import { Button } from 'reactstrap';
import './Components/css/App.css'

function App() {
  return (
    <div className="body">
    <Router>
      <Route path="/" exact component={Login}/>
      <Route path="/Picktime" component={PickTime}/>
      <Route path="/Success" component={Success}/>
    </Router>
    </div>
  );
}

export default App;
