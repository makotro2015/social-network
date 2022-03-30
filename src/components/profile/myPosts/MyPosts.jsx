import React from "react";
import s from "./MyPosts.module.scss";
import Post from "./post/Post";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "./../../../redux/state.js";

function MyPosts(props) {
  const postsElements = props.profilePage.posts.map((p, i) => (
    <Post id={i + 1} message={p.message} likeCount={p.likeCount} />
  ));

  const newPostElement = React.createRef();

  const updateNewPostText = () => {
    const text = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(text));
    newPostElement.current.value = "";
  };

  const addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  return (
    <div className={s.postsBlock}>
      <h3>my posts</h3>
      <div>
        <div>
          <textarea
            onChange={updateNewPostText}
            ref={newPostElement}
            value={props.profilePage.newPostText}
          />
        </div>
        <div>
          <button onClick={addPost}> Добавить пост </button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
}

export default MyPosts;
