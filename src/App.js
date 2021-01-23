import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Toolbar, SideDrawer, Footer } from './Layout/index';
import { Home, CreateYours, About, Listen } from './components/index';



class App extends React.Component {

  render() {
    return (
      <Router>
        <Toolbar />
        {/* <SideDrawer /> */}
        
        <Switch>
          <Route exact path='/' >
            <Home />
          </Route>
          <Route path='/create'>
            <CreateYours />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/listen'>
            <Listen />
          </Route>

        </Switch>

        <Footer />
      </Router>
    );
  }
}


export default App;
