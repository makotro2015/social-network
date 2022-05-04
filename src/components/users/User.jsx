import React from 'react';
import userPhoto from './../../assets/images/user.png';
import { NavLink } from 'react-router-dom';

function Users({user, ...props}) {
  return (
    <div>
      <div>
        <NavLink to={'../profile/' + user.id}>
          <img
            src={user.photos.small !== null ? user.photos.small : userPhoto}
            alt="Фотография пользователя"
          />
        </NavLink>
        {user.followed ? (
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
        )}
      </div>
      <div>{user.name} u.location.city и u.location.country</div>
    </div>
  );
}

export default Users;
