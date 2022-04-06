import React from "react";
import s from "./Profile.module.scss";
import MyPostsContainer from "./myPosts/MyPostsContainer";
import ProfileInfo from "./profileInfo/ProfileInfo";

function Profile(props) {

  return (
    <div className={s.content}>
      <ProfileInfo profile={props.profile}/>
      <MyPostsContainer />
    </div>
  );
}

export default Profile;
