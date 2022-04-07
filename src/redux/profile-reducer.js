const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_CURRENT_USER_ID = "SET_CURRENT_USER_ID";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initialState = {
  posts: [
    { id: 1, message: "hello", likeCount: 12 },
    { id: 2, message: "Alena", likeCount: 10 },
    { id: 3, message: "name", likeCount: 2 },
    { id: 4, message: "family", likeCount: 1 },
  ],
  newPostText: "",
  profile: "",
  userId: 2,
  isFetching: false,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: 1,
        message: state.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
      };

    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText,
      };

    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case SET_CURRENT_USER_ID:
      return {
        ...state,
        userId: action.currentUserId,
      };

    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };

    default:
      return state;
  }
};

export const addPost = () => ({ type: "ADD_POST" });
export const updateNewPostText = (text) => ({
  type: "UPDATE_NEW_POST_TEXT",
  newText: text,
});
export const setUserProfile = (profile) => ({
  type: "SET_USER_PROFILE",
  profile,
});
export const setCurrentUserId = (currentUserId) => ({
  type: "SET_CURRENT_USER_ID",
  currentUserId,
});
export const setIsFetching = (isFetching) => ({
  type: "TOGGLE_IS_FETCHING",
  isFetching,
});

export default profileReducer;
