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
      <ProfileData profile={profile}/>
      <div>
        <ProfileStatus
          status={props.status}
          updateStatus={props.updateStatus}
        />
      </div>
    </div>
  );
}

const Contact = ({contactTitle, contactValue}) => {
  return <div>{contactTitle}: {contactValue}</div>;
};

const ProfileData = ({profile}) => {
  return <div>
    <div>Полное имя: {profile.fullName}</div>
    <div>
        В поиске работы: {profile.lookingForAJob ? 'нет' : 'да'}
    </div>
    {profile.lookingForAJob &&
        <div>Мои навыки: {profile.lookingForAJobDescription}</div>        
    }
    <div>Контакты: {Object.keys(profile.contacts).map(key => {
      return <Contact 
        key={key}
        contactTitle={key}
        contactValue={profile.contacts[key]}
      />;
    })}</div>
  </div>;
};

export default ProfileInfo;
