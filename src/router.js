import { Route, Switch, BrowserRouter } from "react-router-dom";
import React, { Component } from "react";
import Home from "./components/Home";
import DjangoAPIFetch from "./components/DjangoAPIFetch";
import About from "./components/About";

export default class Routes extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact={true} path={"(/)?"} component={DjangoAPIFetch} />
            <Route path="/about" component={About} />

            <Route exact={true} path="/home/:id" component={Home} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
