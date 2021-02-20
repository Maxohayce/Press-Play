import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

// import { Toolbar, SideDrawer, Footer } from './Layout/index';
import { Home, CreateYours, About, Listen } from "./components/containers";
import Register from "./components/containers/Register";
import Login from "./components/containers/Login";

import "./app.css";
import { checkIfAuthed } from "./redux/actions/firebase/firebase";
import { fetchPodcasts } from "./redux/actions/podcasts";

class App extends Component {
  componentDidMount = () => {
    this.props.checkIfAuthed();
    this.props.fetchPodcasts();
  };

  render = () => {
    return (
      <Router>
        {/* <Toolbar /> */}
        {/* <SideDrawer /> */}

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <CreateYours />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/listen">
            <Listen />
          </Route>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
        </Switch>

        {/* <Footer /> */}
      </Router>
    );
  };
}

export default connect(null, { checkIfAuthed, fetchPodcasts })(App);
