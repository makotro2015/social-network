import React, {useState} from 'react';
import './ProfileInfo.scss';
import Preloader from '../../common/preloader/Preloader';
import ProfileStatus from './ProfileStatus';
import userPhoto from '../../../assets/images/user.png';

const ProfileInfo = ({profile, ...props}) => {

  const [editMode, setEditMode] = useState(false);

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
      <div className="top">
        <div className="user-photo">
          <img
            src={profile.photos.large || userPhoto}
            alt="Фотография пользователя"
          />
          {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected} />}
        </div>
        <ProfileStatus
          status={props.status}
          updateStatus={props.updateStatus}
        />
      </div>
      { editMode ? <ProfileDataForm profile={profile}/> : <ProfileData profile={profile}/> }
      <div>
      </div>
    </div>
  );
};

const Contact = ({contactTitle, contactValue}) => {
  return <div className="contacts">{contactTitle}: {contactValue}</div>;
};

const ProfileData = ({profile}) => {
  return <div className="profile-data">
    <div><b>Полное имя:</b> {profile.fullName}</div>
    <div>
      <b>В поиске работы:</b> {profile.lookingForAJob ? 'нет' : 'да'}
    </div>
    {profile.lookingForAJob &&
      <div><b>Мои навыки:</b> {profile.lookingForAJobDescription}</div>        
    }
    <div><b>Контакты:</b> {Object.keys(profile.contacts).map(key => {
      return <Contact 
        key={key}
        contactTitle={key}
        contactValue={profile.contacts[key]}
      />;
    })}</div>
  </div>;
};
const ProfileDataForm = ({profile}) => {
  return <div className="profile-data">
    <div><b>Полное имя:</b> {profile.fullName}</div>
    <div>
      <b>В поиске работы:</b> {profile.lookingForAJob ? 'нет' : 'да'}
    </div>
    {profile.lookingForAJob &&
      <div><b>Мои навыки:</b> {profile.lookingForAJobDescription}</div>        
    }
    <div><b>Контакты:</b> {Object.keys(profile.contacts).map(key => {
      return <Contact 
        key={key}
        contactTitle={key}
        contactValue={profile.contacts[key]}
      />;
    })}</div>
  </div>;
};

export default ProfileInfo;
