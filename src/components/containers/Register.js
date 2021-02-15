// Component imports
import Form from "./Form";
import Layout from "../presentational/Layout";

// Util imports
import fields from "../../assets/data/fields/register.json";
import Backdrop from "../presentational/Layout/Backdrop";

import blackHeadset from "../../assets/images/black-headset.png"

import {AuthField} from './authfield.js';

import {createUserWithEmailAndPasswordHandler} from '../../redux/actions/firebase/firebase'

const Register = () => (
  <Layout>
    <Backdrop backgroundImage={blackHeadset}>
      <Form
        title="Sign up to PressPlay"
        fields={fields}
        onSubmit={(fieldInputs) => {
          let authData = new AuthField(fieldInputs.email.value, fieldInputs.username.value, fieldInputs.password.value);
          console.log(`Email: ${authData.email}, Username: ${authData.username}, Password: ${authData.password}`)
          createUserWithEmailAndPasswordHandler(authData);
        }}
        buttons={[{ value: "Sign Up", id: "signUpBtn", type: "submit" }]}
        alternate={{
          description: "Already have an account",
          link: "/login",
          linkText: "Login now",
        }}
        shouldValidate={true}
      />
    </Backdrop>
  </Layout>
);

export default Register;
