import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Profile from './Profile';
import {
  setCurrentUserId,
  getUserProfileThunkCreator,
  getStatus,
  updateStatus,
  savePhoto,
} from '../../redux/profile-reducer.js';
import withUseParamsComponent from '../../hoc/withUseParams';
import withAuthNavigateComponent from '../../hoc/withAuthNavigate';

class ProfileContainer extends React.Component {
  refreshProfile() {
    this.props.getUserProfileThunkCreator(this.props.currentUserId);
    this.props.getStatus(this.props.currentUserId);
  }

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentUserId !== prevProps.currentUserId) {
      this.refreshProfile();
    }
  }

  render() {
    return (
      <>
        <Profile
          {...this.props}
          isOwner={this.props.isOwner}
          profile={this.props.profile}
          status={this.props.status}
          updateStatus={this.props.updateStatus}
          savePhoto={this.props.savePhoto}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  isFetching: state.profilePage.isFetching,
  authorizedUserId: state.auth.id,
  isAuth: state.auth.isAuth,
});

export default compose(
  connect(mapStateToProps, {
    setCurrentUserId,
    getUserProfileThunkCreator,
    getStatus,
    updateStatus,
    savePhoto,
  }),
  withUseParamsComponent,
  withAuthNavigateComponent,
)(ProfileContainer);
