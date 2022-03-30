import React from "react";
import s from "./Post.module.scss";

function Post(props) {
  return (
    <div className={s.post}>
      {props.message} {props.id} {props.likeCount}
    </div>
  );
}

export default Post;
