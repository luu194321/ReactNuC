export const validateUserLoginForm = (values) => {
  const { username, password } = values;
  const errors = {};

  if (!values.username) {
    errors.username = "Required";
  } else if (values.username.length < 6) {
    errors.username = "Must be at least 6 characters.";
  } else if (values.username.length > 16) {
    errors.username = "Must be 15 characters or less";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 8) {
    errors.password = "Must be at least 8 characters.";
  }

  return errors;
};
