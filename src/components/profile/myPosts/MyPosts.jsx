import React from "react";
import s from "./MyPosts.module.scss";
import Post from "./post/Post";

function MyPosts(props) {
  const postsElements = props.posts.map((p, i) => (
    <Post key={i + 1} message={p.message} likeCount={p.likeCount} />
  ));

  const newPostElement = React.createRef();

  const onUpdateNewPostText = () => {
    const text = newPostElement.current.value;
    props.updateNewPostText(text);

  };

  const onAddPost = () => {
    props.addPost();
  };

  return (
    <div className={s.postsBlock}>
      <h3>my posts</h3>
      <div>
        <div>
          <textarea
            onChange={onUpdateNewPostText}
            ref={newPostElement}
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={onAddPost}> Добавить пост </button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
}

export default MyPosts;
