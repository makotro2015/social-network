import React from 'react';
import s from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.jpg';

function Header(props) {
  return (
    <header className={s.header}>
      <div className={s.logo}>       
        <img src={logo} alt="Логотип" />
        Social Network
      </div>
      {props.isAuth ? (
        <div>
          {props.login} <button onClick={props.logout}>Выйти</button>
        </div>
      ) : (
        <NavLink to="login">Войти</NavLink>
      )}
    </header>
  );
}

export default Header;
