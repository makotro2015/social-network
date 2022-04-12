import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  setCurrentUserId,
  getUserProfileThunkCreator,
} from "./../../redux/profile-reducer.js";
import { Navigate } from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.getUserProfileThunkCreator(this.props.userId);
  }

  changeCurrentUser = (userId) => {
    // debugger;
    this.props.getUserProfileThunkCreator(userId);
    // this.props.setIsFetching(true);
    // axios
    //   .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
    //   .then((response) => {
    //     this.props.setIsFetching(false);
    //     this.props.setUserProfile(response.data);
    //     this.props.setCurrentUserId(userId);
    //   });
  };

  render() {
    if (!this.props.isAuth) {
      return <Navigate to={"/login/"} />;
    }
    return (
      <>
        <Profile
          {...this.props}
          profile={this.props.profile}
          // setUserProfile={this.props.setUserProfile}
          changeCurrentUser={this.changeCurrentUser}
          setCurrentUserId={this.props.setCurrentUserId}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  userId: state.profilePage.currentUserId,
  isFetching: state.profilePage.isFetching,
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, {
  // setUserProfile,
  setCurrentUserId,
  getUserProfileThunkCreator,
})(ProfileContainer);
