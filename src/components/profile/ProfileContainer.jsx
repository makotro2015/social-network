import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {
  setCurrentUserId,
  getUserProfileThunkCreator,
  getStatus,
  updateStatus,
} from './../../redux/profile-reducer.js';
import { withUseParamsComponent } from '../../hoc/withUseParams';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.getUserProfileThunkCreator(this.props.currentUserId);
    this.props.getStatus(this.props.currentUserId);
  }

  render() {
    return (
      <>
        <Profile
          {...this.props}
          profile={this.props.profile}
          status={this.props.status}
          updateStatus={this.props.updateStatus}
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
  }),
  withUseParamsComponent,
)(ProfileContainer);
