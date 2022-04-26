import React from 'react';
import s from './MyPosts.module.scss';
import Post from './post/Post';
import { Field, reduxForm } from 'redux-form';
import {
  required,
  maxLengthCreator,
} from './../../../assets/validation/validation';
import { Element } from '../../common/formsControls/FormsControls';

const maxLength5 = maxLengthCreator(5);

const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder="add post"
          name="newPostBody"
          component={Element}
          elementtype="textarea"
          validate={[required, maxLength5]}
        />
      </div>
      <div>
        <button> Добавить пост </button>
      </div>
    </form>
  );
};

const AddPostReduxForm = reduxForm({
  form: 'profileAddPostForm',
})(AddPostForm);

function MyPosts(props) {
  const postsElements = props.posts.map((p, i) => (
    <Post key={i + 1} message={p.message} likeCount={p.likeCount} />
  ));

  const addNewPost = (formData) => {
    props.addPost(formData.newPostBody);
  };

  return (
    <div className={s.postsBlock}>
      <h3>my posts</h3>
      <AddPostReduxForm onSubmit={addNewPost} />
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
}

export default MyPosts;
