import React from 'react';
import { connect } from 'react-redux';
import { Field } from 'redux-form';
import { reduxForm } from 'redux-form';
import { Element } from '../common/formsControls/FormsControls';
import {
  required,
  maxLengthCreator,
} from './../../assets/validation/validation';
import { login } from './../../redux/auth-reducer';
import { Navigate } from 'react-router-dom';
import './../common/formsControls/FormsControls.scss';

const maxLength30 = maxLengthCreator(30);

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
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
      {props.error && <div className="text-error"> {props.error} </div>}
      <button>Login</button>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: 'login',
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.login, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Navigate to="/profile/2" />;
  }
  return (
    <div>
      <h1>Login page</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
