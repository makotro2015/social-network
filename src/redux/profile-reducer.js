import { profileAPI } from './../api/api';

const ADD_POST = 'ADD_POST';
const DELETE_POST = 'DELETE_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_CURRENT_USER_ID = 'SET_CURRENT_USER_ID';
const SET_STATUS = 'SET_STATUS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

const initialState = {
  posts: [
    { id: 1, message: 'hello', likeCount: 12 },
    { id: 2, message: 'Alena', likeCount: 10 },
    { id: 3, message: 'name', likeCount: 2 },
    { id: 4, message: 'family', likeCount: 1 },
  ],
  profile: '',
  currentUserId: null,
  isFetching: false,
  status: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
  case ADD_POST:
    const newPost = {
      id: 1,
      message: action.newPostBody,
      likesCount: 0,
    };
    return {
      ...state,
      posts: [...state.posts, newPost],
    };

  case DELETE_POST:
    return {
      ...state,
      posts: state.posts.filter((p) => p.id !== action.postId),
    };

  case SET_USER_PROFILE:
    return {
      ...state,
      profile: action.profile,
    };
  case SET_CURRENT_USER_ID:
    return {
      ...state,
      currentUserId: action.currentUserId,
    };

  case TOGGLE_IS_FETCHING:
    return {
      ...state,
      isFetching: action.isFetching,
    };

  case SET_STATUS:
    return {
      ...state,
      status: action.status,
    };

  default:
    return state;
  }
};

export const addPost = (newPostBody) => ({ type: 'ADD_POST', newPostBody });
export const deletePost = (postId) => ({ type: 'DELETE_POST', postId });
export const setUserProfile = (profile) => ({
  type: 'SET_USER_PROFILE',
  profile,
});
export const setCurrentUserId = (currentUserId) => ({
  type: 'SET_CURRENT_USER_ID',
  currentUserId,
});
export const setIsFetching = (isFetching) => ({
  type: 'TOGGLE_IS_FETCHING',
  isFetching,
});
export const setStatus = (status) => ({
  type: 'SET_STATUS',
  status,
});
export const getUserProfileThunkCreator = (userId) => async (dispatch) => {
  const data = await profileAPI.getProfile(userId);
  dispatch(setUserProfile(data));
};

export const getStatus = (userId) => async (dispatch) => {
  const data = await profileAPI.getStatus(userId);
  dispatch(setStatus(data));
};

export const updateStatus = (status) => async (dispatch) => {
  const data = await profileAPI.updateStatus(status);
  if (data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};

export default profileReducer;
