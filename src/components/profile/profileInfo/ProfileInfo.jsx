import React from "react";
import "./ProfileInfo.scss";
import Preloader from "./../../common/preloader/Preloader";

function ProfileInfo(props) {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div className="profile-content">
      <div className="img"></div>
      <img src={props.profile.photos.small} alt="Фотография пользователя" />
      <div>ava + descriptions</div>
    </div>
  );
}

export default ProfileInfo;
