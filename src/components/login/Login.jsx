import React from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { Field } from 'redux-form';
import { reduxForm } from 'redux-form';
import Element from '../common/formsControls/FormsControls';
import {
  required,
  maxLengthCreator,
} from '../../assets/validation/validation';
import { login } from '../../redux/auth-reducer';
import '../common/formsControls/FormsControls.scss';
import './Login.scss';
import background from '../../assets/images/backgroundLogin.jpg';
import Button from '../common/buttons/Button';

const maxLength30 = maxLengthCreator(30);

const LoginForm = ({ handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <legend>Войдите в Social Network</legend>
      <Field
        placeholder="Логин"
        name="login"
        component={Element}
        elementtype="input"
        validate={[required, maxLength30]}
      />
      <br />
      <Field
        placeholder="Пароль"
        name="password"
        type="password"
        component={Element}
        elementtype="input"
        validate={[required, maxLength30]}
      />
      <div className="btn-wrapper">
        {error && <div className="text-error"> {error} </div>}
        <Button name="Войти" />
        <label>
          <Field type="checkbox" name="rememberMe" component="input" /> Запомнить меня
        </label>
      </div>
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
    return <Navigate to={'/profile/' + props.authorizedUserId} />;
  }
  return (
    <div className="login" style={{ backgroundImage: `url(${background})` }}>
      <LoginReduxForm onSubmit={onSubmit} />
      <p className="hint">
        *Для входа в социальную сеть введите логин: makotro2015@gmail.com,
        пароль: flvbybcnhfwbz
      </p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  authorizedUserId: state.auth.id,
});

export default connect(mapStateToProps, { login })(Login);
