// Component imports
import Form from "./Form";
import Layout from "../presentational/Layout";

// Util imports
import fields from "../../assets/data/fields/login.json";
import Backdrop from "../presentational/Layout/Backdrop";

import blackHeadset from "../../assets/images/black-headset.png"

const Login = () => (
  <Layout>
    <Backdrop backgroundImage={blackHeadset}>
      <Form
        title="Log in to PressPlay"
        fields={fields}
        onSubmit={(fieldInputs) => console.log(fieldInputs)}
        buttons={[{ value: "Login", id: "loginBtn", type: "submit" }]}
        alternate={{
          description: "Don't have an account? ",
          link: "/register",
          linkText: "Signup now",
        }}
        shouldValidate={false}
      />
    </Backdrop>
  </Layout>
);

export default Login;
