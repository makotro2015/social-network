import React from "react";
import s from "./Profile.module.scss";
import MyPostsContainer from "./myPosts/MyPostsContainer";
import ProfileInfo from "./profileInfo/ProfileInfo";
// import { useParams } from "react-router-dom";

function Profile(props) {
  // const currentUserId = useParams().userId;
  // if (currentUserId && props.profile.userId !== props.userId) {
  //   props.changeCurrentUser(currentUserId);
  // }
  return (
    <div className={s.content}>
      <ProfileInfo profile={props.profile} />
      <MyPostsContainer />
    </div>
  );
}

export default Profile;
