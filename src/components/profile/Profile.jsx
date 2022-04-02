import React from "react";
import s from "./Profile.module.scss";
import MyPostsContainer from "./myPosts/MyPostsContainer";

function Profile(props) {
  return (
    <div className={s.content}>
      <div className={s.img}></div>
      <div>ava + descriptions</div>
      <MyPostsContainer />
    </div>
  );
}

export default Profile;
