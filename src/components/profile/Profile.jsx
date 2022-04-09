import React from "react";
import s from "./Profile.module.scss";
import MyPostsContainer from "./myPosts/MyPostsContainer";
import ProfileInfo from "./profileInfo/ProfileInfo";
import { useParams } from "react-router-dom";

function Profile(props) {
  debugger;
  const currentUserId = useParams().userId;
  console.log(currentUserId);
  if (currentUserId) {
    props.setCurrentUserId(currentUserId);
  }
  return (
    <div className={s.content}>
      <ProfileInfo profile={props.profile} />
      <MyPostsContainer />
    </div>
  );
}

export default Profile;
