import React from 'react';
import s from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.jpg';
import Button from '../common/buttons/Button';

function Header(props) {
  return (
    <header className={s.header}>
      <div className={s.logo}>
        <img src={logo} alt="Логотип" />
        Social Network
      </div>
      {props.isAuth ? (
        <div>
          {props.login} <Button click={props.logout} name="Выйти" />
        </div>
      ) : (
        <NavLink to="login">Войти</NavLink>
      )}
    </header>
  );
}

export default Header;
