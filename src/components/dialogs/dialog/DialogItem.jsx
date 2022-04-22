import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import s from './DialogItem.module.scss';

function DialogItem(props) {
  return (
    <>
      <div className={s.dialog}>
        <NavLink to={`${props.id}`}> {props.name} </NavLink>
      </div>
      <Outlet />
    </>
  );
}

export default DialogItem;
