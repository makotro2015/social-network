import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import { connect } from "react-redux";
import {
  setUserProfile,
  setCurrentUserId,
} from "./../../redux/profile-reducer.js";
import { useParams } from "react-router-dom";

function ProfileContainer(props) {
  let currentUserId = useParams().userId;
  props.setCurrentUserId(currentUserId);
  axios
    .get(
      `https://social-network.samuraijs.com/api/1.0/profile/${currentUserId}`
    )
    .then((response) => {
      props.setUserProfile(response.data);
    });

  return (
    <Profile
      {...props}
      profile={props.profile}
      setUserProfile={props.setUserProfile}
    />
  );
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  currentUserId: state.profilePage.currentUserId,
});

export default connect(mapStateToProps, { setUserProfile, setCurrentUserId })(
  ProfileContainer
);
