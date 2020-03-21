import React from 'react';
import {BrowserRouter as Router, Route } from "react-router-dom" 
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"
import Navbar from "./Components/navbar.component"
import createUserComponent from "./Components/createUserComponent"
import updateUserComponent from "./Components/updateUserComponent"
import homePageComponent from "./Components/homePageComponent"

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container h-100">
        <Route path="/" exact component={homePageComponent} /> 
        <Route path="/create" component={createUserComponent} />
        <Route path="/update" component={updateUserComponent} />
      </div>
    </Router>
  );
}

export default App;
