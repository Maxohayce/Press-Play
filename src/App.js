import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// import { Toolbar, SideDrawer, Footer } from './Layout/index';
import { Home, CreateYours, About, Listen } from "./containers/index";
import Form from "./UI/Form";

const App = () => {

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  console.log(email, username, password);

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
      <Route path="/form">
        <Form
          title="Sign up to PressPlay"
          fields={[
            {
              elementType: "input",
              label: "Email",
              type: "email",
              name: "email",
              id: "signUpEmail",
              example: "example@gmail.com",
              onChange: (val) => {setEmail(val)},
              value: email
            },
            {
              elementType: "input",
              label: "Username",
              type: "text",
              name: "username",
              id: "signUpUserName",
              example: "chidubem",
              onChange: (val) => setUsername(val),
              value: username
            },
            {
              elementType: "input",
              label: "Password",
              type: "password",
              name: "password",
              id: "signUpPassword",
              example: "Chidubem@1",
              onChange: (val) => setPassword(val),
              value: password
            },
          ]}
          onSubmit={() => console.log(email, username, password)}
          buttons={[{ value: "Sign Up", id: "signUpBtn", type: "submit" }]}
          alternate={{
            description: "Already have an account",
            link: "/login",
            linkText: "Login now",
          }}
        />
      </Route>
    </Switch>

    {/* <Footer /> */}
  </Router>
);}

export default App;
