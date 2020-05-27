import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles.css";
import { Container } from "react-bootstrap";
import Posts from "./Posts";
import SinglePost from "./SinglePost";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" render={Posts} />
            <Route path="/:id" render={SinglePost} />
          </Switch>
        </Router>
        <Container className="mt-5 " />
      </div>
    );
  }
}
export default App;
