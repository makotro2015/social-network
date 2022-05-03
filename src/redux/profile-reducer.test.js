import profileReducer, { addPost, deletePost } from './profile-reducer';

const state = {
  posts: [
    { id: 1, message: 'hello', likeCount: 12 },
    { id: 2, message: 'Alena', likeCount: 10 },
    { id: 3, message: 'name', likeCount: 2 },
    { id: 4, message: 'family', likeCount: 1 },
  ],
};

it('length posts should be incremented', () => {
  const action = addPost('test text');
  const newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(5);
});

it('message of new post should be correct', () => {
  const action = addPost('test text');
  const newState = profileReducer(state, action);
  expect(newState.posts[4].message).toBe('test text');
});

it('after deleting length of posts should be decrement', () => {
  const action = deletePost(1);
  const newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(3);
});

it('after deleting length of posts shouldn\'t be decrement if post id is incorrect', () => {
  const action = deletePost(10000);
  const newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(4);
});
