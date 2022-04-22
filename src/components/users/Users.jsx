import React from 'react';
import userPhoto from './../../assets/images/user.png';
import s from './Users.module.scss';
import { NavLink } from 'react-router-dom';

function Users(props) {
  const pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
  const pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map((p) => (
          <span
            key={p.id}
            className={props.currentPage === p ? s.currentPage : ''}
            onClick={() => {
              props.changeCurrentPage(p);
            }}
          >
            {p}
          </span>
        ))}
      </div>
      {props.users.map((u) => (
        <div key={u.id}>
          <div>
            <NavLink to={'../profile/' + u.id}>
              <img
                src={u.photos.small !== null ? u.photos.small : userPhoto}
                alt="Фотография пользователя"
              />
            </NavLink>
            {u.followed ? (
              <button
                disabled={props.followingInProgress.some((id) => id === u.id)}
                onClick={() => {
                  props.unfollow(u.id);
                }}
              >
                Unfollow
              </button>
            ) : (
              <button
                disabled={props.followingInProgress.some((id) => id === u.id)}
                onClick={() => {
                  props.follow(u.id);
                }}
              >
                Follow
              </button>
            )}
          </div>
          <div>{u.name} u.location.city и u.location.country</div>
        </div>
      ))}
    </div>
  );
}

export default Users;
