import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  setCurrentUserId,
  getUserProfileThunkCreator,
} from "./../../redux/profile-reducer.js";
import { Navigate, useParams } from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.getUserProfileThunkCreator(this.props.currentUserId);
  }

  render() {
    if (!this.props.isAuth) {
      return <Navigate to="/login/" />;
    }
    return (
      <>
        <Profile {...this.props} profile={this.props.profile} />
      </>
    );
  }
}

const WithUseParamsProfileContainer = (props) => {
  let currentUserId = useParams().userId;
  if (!currentUserId) {
    currentUserId = props.userId;
  }
  props.setCurrentUserId(currentUserId);
  return <ProfileContainer {...props} currentUserId={currentUserId} />;
};

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  userId: state.profilePage.currentUserId,
  isFetching: state.profilePage.isFetching,
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, {
  setCurrentUserId,
  getUserProfileThunkCreator,
})(WithUseParamsProfileContainer);
