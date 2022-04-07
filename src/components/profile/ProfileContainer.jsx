import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import { connect } from "react-redux";
import {
  setUserProfile,
  setCurrentUserId,
  setIsFetching,
} from "./../../redux/profile-reducer.js";

import Preloader from "./../common/preloader/Preloader";

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.setIsFetching(true);

    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/profile/${this.props.userId}`
      )
      .then((response) => {
        this.props.setIsFetching(false);
        this.props.setUserProfile(response.data);
      });
  }

  changeCurrentUser = (userId) => {
    this.props.setIsFetching(true);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then((response) => {
        this.props.setIsFetching(false);
        this.props.setUserProfile(response.data);
        this.props.setCurrentUserId(userId);
      });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <Profile
            {...this.props}
            profile={this.props.profile}
            setUserProfile={this.props.setUserProfile}
            changeCurrentUser={this.changeCurrentUser}
          />
        )}
        ;
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  userId: state.profilePage.userId,
  isFetching: state.profilePage.isFetching,
});

export default connect(mapStateToProps, {
  setUserProfile,
  setCurrentUserId,
  setIsFetching,
})(ProfileContainer);
