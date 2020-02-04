import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.less";
import { Home } from "./components/Home";
import { Signup } from "./components/Signup";
import { Feed } from "./components/Feed";
import { NoMatch } from "./components/NoMatch";
import "./less_my_app/styles.css";

function App() {
  return (
    <Router>
      <React.Fragment>
        <div className="container jumbo">
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/feed" component={Feed} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </div>
      </React.Fragment>
    </Router>
  );
}

export default App;
