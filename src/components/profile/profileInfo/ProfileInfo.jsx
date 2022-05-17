import React from 'react';
import './ProfileInfo.scss';
import Preloader from './../../common/preloader/Preloader';
import ProfileStatus from './ProfileStatus';
import userPhoto from '../../../assets/images/user.png';

function ProfileInfo({profile, ...props}) {
  if (!profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  };

  return (
    <div className="profile-content">
      <img
        src={profile.photos.large || userPhoto}
        alt="Фотография пользователя"
      />
      {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected} />}
      <div>
        looking for a job: {profile.lookingForAJob ? 'yes' : 'no'}
      </div>
      {profile.lookingForAJob &&
        <div>Мои навыки: {profile.lookingForAJobDescription}</div>
      }
      <div>
        <ProfileStatus
          status={props.status}
          updateStatus={props.updateStatus}
        />
      </div>
      <div>
        ${profile.aboutMe}
        <br />${profile.fullName}
      </div>
    </div>
  );
}

export default ProfileInfo;
