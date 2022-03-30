import React from "react";
import s from "./Profile.module.scss";
import MyPosts from "./myPosts/MyPosts";

function Profile(props) {
  return (
    <div className={s.content}>
      <div className={s.img}></div>
      <div>ava + descriptions</div>
      <MyPosts profilePage={props.profilePage} dispatch={props.dispatch} />
    </div>
  );
}

export default Profile;
