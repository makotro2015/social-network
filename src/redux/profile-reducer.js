import { profileAPI } from './../api/api';

const ADD_POST = 'ADD_POST';
const DELETE_POST = 'DELETE_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_CURRENT_USER_ID = 'SET_CURRENT_USER_ID';
const SET_STATUS = 'SET_STATUS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

const initialState = {
  posts: [
    { id: 1, message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
     quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
     Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
     nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
     deserunt mollit anim id est laborum.`, likeCount: 5 },
    { id: 2, message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
     quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
     Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
     nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
     deserunt mollit anim id est laborum.`, likeCount: 10 },
    { id: 3, message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
     quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
     Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
     nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
     deserunt mollit anim id est laborum.`, likeCount: 2 },
    { id: 4, message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
     quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
     Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
     nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
     deserunt mollit anim id est laborum.`, likeCount: 20 },
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

  case SAVE_PHOTO_SUCCESS:
    return {
      ...state,
      profile: { ...state.profile, photos: action.photos },
    };

  default:
    return state;
  }
};

export const addPost = (newPostBody) => ({ type: 'ADD_POST', newPostBody });
export const deletePost = (postId) => ({ type: 'DELETE_POST', postId });
export const savePhotoSuccess = (photos) => ({
  type: 'SAVE_PHOTO_SUCCESS',
  photos,
});
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

export const savePhoto = (file) => async (dispatch) => {
  const data = await profileAPI.savePhoto(file);
  if (data.resultCode === 0) {
    dispatch(savePhotoSuccess(data.data.photos));
  }
};

export default profileReducer;
