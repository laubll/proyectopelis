import './App.css';
import { useState } from "react";
import React from "react";
import { BrowserRouter as Router, useRouteMatch, Switch, Route, Link} from "react-router-dom";
import Movies from "./Movies"
import Navbar from "./Navbar";


function App() {

  return (
  <Router>
      <div>
      <Navbar /> 
        <Switch>
          <Route path="/terms">
            <h1>Términos</h1>
          </Route>
          <Route path="/">
            <Movies />
          </Route>
        </Switch>
        </div>
  </Router>
  )
}
  
export default App;
