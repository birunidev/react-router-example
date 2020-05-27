import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles.css";
import { Container } from "react-bootstrap";
import Posts from "./Posts";
import SinglePost from "./SinglePost";

export default function App() {
  return (
    <div className="App">
      <Container className="mt-5 ">
        <Router>
          <Switch>
            <Route exact path="/" component={Posts} />
            <Route exact path="/:id" component={SinglePost} />
          </Switch>
        </Router>
      </Container>
    </div>
  );
}
