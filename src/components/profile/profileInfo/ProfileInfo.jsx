import React from "react";
import "./ProfileInfo.scss";
import Preloader from "./../../common/preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

function ProfileInfo(props) {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div className="profile-content">
      <div className="img"></div>

      <img src={props.profile.photos.small} alt="Фотография пользователя" />
      <div>
        <ProfileStatus
          status={props.status}
          updateStatus={props.updateStatus}
        />
      </div>
      <div>
        ${props.profile.aboutMe}
        <br />${props.profile.fullName}
      </div>
    </div>
  );
}

export default ProfileInfo;
