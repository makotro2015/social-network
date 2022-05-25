import { connect } from 'react-redux';
import MyPosts from './MyPosts';
import { addPost } from '../../../redux/profile-reducer';

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
  };
};

const MyPostsContainer = connect(mapStateToProps, {
  addPost,
})(MyPosts);

export default MyPostsContainer;
