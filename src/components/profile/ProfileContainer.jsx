import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  setCurrentUserId,
  getUserProfileThunkCreator,
} from "./../../redux/profile-reducer.js";
import { withAuthNavigateComponent } from "../../hoc/withAuthNavigate";
import { withUseParamsComponent } from "../../hoc/withUseParams";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.getUserProfileThunkCreator(this.props.currentUserId);
  }

  render() {
    return (
      <>
        <Profile {...this.props} profile={this.props.profile} />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isFetching: state.profilePage.isFetching,
});

export default compose(
  connect(mapStateToProps, {
    setCurrentUserId,
    getUserProfileThunkCreator,
  }),
  withUseParamsComponent,
  withAuthNavigateComponent
)(ProfileContainer);
