// Component imports
import Form from "./Form";
import Layout from "../presentational/Layout";

// Util imports
import fields from "../../assets/data/fields/register.json";
import Backdrop from "../presentational/Layout/Backdrop/Backdrop";

import blackHeadset from "../../assets/images/black-headset.png"

const Register = () => (
  <Layout>
    <Backdrop backgroundImage={blackHeadset}>
      <Form
        title="Sign up to PressPlay"
        fields={fields}
        onSubmit={(fieldInputs) => console.log(fieldInputs)}
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
