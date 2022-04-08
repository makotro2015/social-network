import MyPosts from "./MyPosts";
import { addPost, updateNewPostText } from "./../../../redux/profile-reducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     updateNewPostText: (text) => {
//       dispatch(updateNewPostTextActionCreator(text));
//     },
//     addPost: () => {
//       dispatch(addPostActionCreator());
//     },
//   };
// };

const MyPostsContainer = connect(mapStateToProps, {
  updateNewPostText,
  addPost,
})(MyPosts);

export default MyPostsContainer;
