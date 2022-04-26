import React from 'react';
import s from './Header.module.scss';
import { NavLink } from 'react-router-dom';

function Header(props) {
  return (
    <header className={s.header}>
      {' '}
      header
      <div>
        {props.isAuth ? (
          <div>
            {props.login} <button onClick={props.logout}>Log out</button>
          </div>
        ) : (
          <NavLink to="login"> Login </NavLink>
        )}
      </div>
    </header>
  );
}

export default Header;
