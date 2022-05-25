import React from 'react';
import s from './Post.module.scss';

const Post = (props) => {
  return (
    <div className={s.post}>
      <p>{props.message} </p>
      <span>Лайки: {props.likeCount}</span>
    </div>
  );
};

export default Post;
