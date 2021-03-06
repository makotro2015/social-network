import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {
  follow,
  unfollow,
  setCurrentPage,
  setIsFollowingProgress,
  getUsersThunkCreator,
} from '../../redux/users-reducer.js';
import {
  getUsers,
  getPageSize,
  getTotalUsersCount,
  getCurrentPage,
  getIsFetching,
  getFollowingInProgress,
  getIsAuth,
} from '../../redux/selectors.js';
import Users from './Users';
import Preloader from '../common/preloader/Preloader';

class UsersAPI extends React.Component {
  componentDidMount() {
    this.props.getUsersThunkCreator(
      this.props.pageSize,
      this.props.currentPage,
    );
  }

  changeCurrentPage = (currentPage) => {
    this.props.setCurrentPage(currentPage);
    this.props.getUsersThunkCreator(this.props.pageSize, currentPage);
  };

  render() {
    const pageCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize,
    );
    const pages = [];
    for (let i = 1; i <= pageCount; i++) {
      pages.push(i);
    }

    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <Users
            pageSize={this.props.pageSize}
            totalUsersCount={this.props.totalUsersCount}
            changeCurrentPage={this.changeCurrentPage}
            currentPage={this.props.currentPage}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            followingInProgress={this.props.followingInProgress}
            isAuth={this.props.isAuth}
          />
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
    isAuth: getIsAuth(state),
  };
};

export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    setIsFollowingProgress,
    getUsersThunkCreator,
  }),
)(UsersAPI);
