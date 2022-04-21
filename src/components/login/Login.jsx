import React from "react";
import { Field } from "redux-form";
import { reduxForm } from "redux-form";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field placeholder="Login" name="login" component={"input"} />
      <br />
      <Field placeholder="Password" name="password" component={"input"} />
      <br />
      <Field type="checkbox" name="rememberMe" component={"input"} /> remember
      me
      <br />
      <button>Login</button>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <div>
      <h1>Login page</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default Login;
