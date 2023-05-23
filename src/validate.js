const validate = (value) => {
  const errors = {};
  const regex =
    /^[-!#$%&'*+0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
  if (!value.companyName) {
    errors.companyName = "Required Field";
  }
  if (!value.email) {
    errors.email = "Email is required";
  } else if (!regex.test(value.email)) {
    errors.email = "Invalid format";
  }
  if (!value.numberOfEmployees) {
    errors.numberOfEmployees = "Required Field";
  }
  if (!value.password) {
    errors.password = "Password is required";
  }
  return errors;
};

export default validate;
