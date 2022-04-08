import React from "react";
import s from "./Header.module.scss";
import { NavLink } from "react-router-dom";

function Header(props) {
  debugger;
  return (
    <header className={s.header}>
      {" "}
      header
      <div>
        {props.isAuth ? (
          props.login
        ) : (
          <NavLink to="login"> {props.login} </NavLink>
        )}
      </div>
    </header>
  );
}

export default Header;
