import React from "react";
import {
  follow,
  unfollow,
  setCurrentPage,
  setIsFollowingProgress,
  getUsersThunkCreator,
} from "./../../redux/users-reducer.js";
import Users from "./Users";
import { connect } from "react-redux";
import Preloader from "./../common/preloader/Preloader";
import { compose } from "redux";
import { withAuthNavigateComponent } from "../../hoc/withAuthNavigate.js";

class UsersAPI extends React.Component {
  componentDidMount() {
    this.props.getUsersThunkCreator(
      this.props.pageSize,
      this.props.currentPage
    );
  }

  changeCurrentPage = (currentPage) => {
    this.props.setCurrentPage(currentPage);
    this.props.getUsersThunkCreator(this.props.pageSize, currentPage);
  };

  render() {
    let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    let pages = [];
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
          />
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
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
  withAuthNavigateComponent
)(UsersAPI);
