import React from 'react';
import { NavLink } from 'react-router-dom';
import userPhoto from '../../assets/images/user.png';

const Users = ({user, isAuth, ...props}) => {
  const renderBtnFollow = (followed) => {
    return followed ? (
      <button
        disabled={props.followingInProgress.some((id) => id === user.id)}
        onClick={() => {
          props.unfollow(user.id);
        }}
      >
          Unfollow
      </button>
    ) : (
      <button
        disabled={props.followingInProgress.some((id) => id === user.id)}
        onClick={() => {
          props.follow(user.id);
        }}
      >
          Follow
      </button>
    );
  };
    
  return (
    <div>
      <div>
        <NavLink to={'../profile/' + user.id}>
          <img
            src={user.photos.small !== null ? user.photos.small : userPhoto}
            alt="Фотография пользователя"
          />
        </NavLink>
      </div>
      { isAuth && renderBtnFollow(user.followed) }
      <div>{user.name} {user.status || 'Статус не добавлен'} </div>
    </div>
  );
};

export default Users;
