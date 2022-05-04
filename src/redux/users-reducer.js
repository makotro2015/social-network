import { usersAPI } from './../api/api';
import { updateObjectInArray } from './../assets/helper';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

const initialState = {
  users: [],
  pageSize: 20,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
  case FOLLOW:
    return {
      ...state,
      users: updateObjectInArray(state.users, action.userId, 'id', { followed: true }),
    };

  case UNFOLLOW:
    return {
      ...state,
      users: updateObjectInArray(state.users, action.userId, 'id', { followed: false }),
    };

  case SET_USERS:
    return {
      ...state,
      users: action.users,
    };

  case SET_CURRENT_PAGE:
    return {
      ...state,
      currentPage: action.currentPage,
    };

  case SET_TOTAL_USERS_COUNT:
    return {
      ...state,
      totalUsersCount: action.totalUsersCount,
    };

  case TOGGLE_IS_FETCHING:
    return {
      ...state,
      isFetching: action.isFetching,
    };
  case TOGGLE_IS_FOLLOWING_PROGRESS:
    return {
      ...state,
      followingInProgress: action.followingInProgress
        ? [...state.followingInProgress, action.userId]
        : state.followingInProgress.filter((id) => id !== action.userId),
    };

  default:
    return state;
  }
};

export const followSuccess = (userId) => ({ type: 'FOLLOW', userId });
export const unfollowSuccess = (userId) => ({ type: 'UNFOLLOW', userId });
export const setUsers = (users) => ({ type: 'SET-USERS', users });
export const setCurrentPage = (currentPage) => ({
  type: 'SET_CURRENT_PAGE',
  currentPage,
});
export const setTotalUsersCount = (totalUsersCount) => ({
  type: 'SET_TOTAL_USERS_COUNT',
  totalUsersCount,
});
export const setIsFetching = (isFetching) => ({
  type: 'TOGGLE_IS_FETCHING',
  isFetching,
});
export const setIsFollowingProgress = (followingInProgress, userId) => ({
  type: 'TOGGLE_IS_FOLLOWING_PROGRESS',
  followingInProgress,
  userId,
});

export const getUsersThunkCreator = (pageSize, currentPage) => async (dispatch) => {
  dispatch(setIsFetching(true));
  const data = await usersAPI.getUsers(pageSize, currentPage);
  dispatch(setIsFetching(false));
  dispatch(setUsers(data.items));
  dispatch(setTotalUsersCount(data.totalCount));
};

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
  dispatch(setIsFollowingProgress(true, userId));
  const data = await apiMethod(userId);
  if (data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(setIsFollowingProgress(false, userId));
};

export const follow = (userId) => async (dispatch) => {
  followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess);
};

export const unfollow = (userId) => async (dispatch) => {
  followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess);
};

export default usersReducer;
