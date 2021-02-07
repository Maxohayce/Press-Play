import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import { Toolbar, SideDrawer, Footer } from './Layout/index';
import { Home, CreateYours, About, Listen } from "./components/containers";
import Register from "./components/containers/Register";

const App = () => {

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
    </Switch>

    {/* <Footer /> */}
  </Router>
);}

export default App;
