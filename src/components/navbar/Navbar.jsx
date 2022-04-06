import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  return (
    <nav className="nav">
      <div className="item">
        <NavLink to="profile">Профиль</NavLink>
      </div>
      <div className="item">
        <NavLink to="dialogs">Диалоги</NavLink>
      </div>
      <div className="item">
        <NavLink to="users">Пользователи</NavLink>
      </div>
      <div className="item">
        <a>Новости</a>
      </div>
      <div className="item">
        <a>Музыка</a>
      </div>
      <div className="item">
        <a>Настройки</a>
      </div>
    </nav>
  );
}

export default Navbar;
