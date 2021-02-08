import Form from "../Form";
import fields from "../../../assets/data/fields/register.json";

const Register = () => (
  <div>
    Register
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
  </div>
);

export default Register;
