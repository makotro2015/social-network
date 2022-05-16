import React from "react";
import { connect } from "react-redux";
import { Field } from "redux-form";
import { reduxForm } from "redux-form";
import { Element } from "../common/formsControls/FormsControls";
import {
  required,
  maxLengthCreator,
} from "./../../assets/validation/validation";
import { login } from "./../../redux/auth-reducer";
import { Navigate } from "react-router-dom";
import "./../common/formsControls/FormsControls.scss";
import "./Login.scss";
import background from "../../assets/images/backgroundLogin.jpg";

const maxLength30 = maxLengthCreator(30);

const LoginForm = ({ handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field
        placeholder="Login"
        name="login"
        component={Element}
        elementtype="input"
        validate={[required, maxLength30]}
      />
      <br />
      <Field
        placeholder="Password"
        name="password"
        type="password"
        component={Element}
        elementtype="input"
        validate={[required, maxLength30]}
      />
      <br />
      <Field type="checkbox" name="rememberMe" component="input" /> remember me
      <br />
      {error && <div className="text-error"> {error} </div>}
      <button>Login</button>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.login, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Navigate to={"/profile/" + props.authorizedUserId} />;
  }
  return (
    <div className="login" style={{ backgroundImage: `url(${background})` }}>
      <h1>Login page</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  authorizedUserId: state.auth.id,
});

export default connect(mapStateToProps, { login })(Login);
