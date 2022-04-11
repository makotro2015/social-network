import React from "react";
import userPhoto from "./../../assets/images/user.png";
import s from "./Users.module.scss";
import { NavLink } from "react-router-dom";
import * as axios from "axios";
import { usersAPI } from "../../api/api.js";

function Users(props) {
  let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map((p) => (
          <span
            key={p.id}
            className={props.currentPage === p ? s.currentPage : ""}
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
            <NavLink to={"../profile/" + u.id}>
              <img
                src={u.photos.small !== null ? u.photos.small : userPhoto}
                alt="Фотография пользователя"
              />
            </NavLink>
            {u.followed ? (
              <button
                onClick={() => {
                  usersAPI.unfollow(u.id).then((data) => {
                    if (data.resultCode === 0) {
                      props.unfollow(u.id);
                    }
                  });
                }}
              >
                Follow
              </button>
            ) : (
              <button
                onClick={() => {
                  usersAPI.follow(u.id).then((data) => {
                    if (data.resultCode === 0) {
                      props.follow(u.id);
                    }
                  });
                }}
              >
                Unfollow
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
