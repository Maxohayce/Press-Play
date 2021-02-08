export const isValid = (name, value) => {
  switch (name) {
    case "email":
      return validateEmail(value);
    case "password":
      return validatePassword(value);
    default:
      return value.length >= 4;
  }
};

const validateEmail = (mail) =>
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
    mail
  );

const validatePassword = (password) =>
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/.test(
    password
  );
