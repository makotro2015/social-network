import React from 'react';
import { Field } from 'redux-form';
import { reduxForm } from 'redux-form';
import { Input } from '../common/formsControls/FormsControls';
import {
  required,
  maxLengthCreator,
} from './../../assets/validation/validation';

const maxLength3 = maxLengthCreator(3);

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        placeholder="Login"
        name="login"
        component={Input}
        validate={[required, maxLength3]}
      />
      <br />
      <Field
        placeholder="Password"
        name="password"
        component={Input}
        validate={[required, maxLength3]}
      />
      <br />
      <Field type="checkbox" name="rememberMe" component={Input} /> remember me
      <br />
      <button>Login</button>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: 'login',
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {};

  return (
    <div>
      <h1>Login page</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default Login;
