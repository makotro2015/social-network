import dialogsReducer from './dialogs.reducer';
import profileReducer from './profile.reducer';

const store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'hello', likeCount: 12 },
        { id: 2, message: 'Alena', likeCount: 10 },
        { id: 3, message: 'name', likeCount: 2 },
        { id: 4, message: 'family', likeCount: 1 },
      ],
      newPostText: '',
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: 'Alena' },
        { id: 2, name: 'Lena' },
        { id: 3, name: 'Elena' },
        { id: 4, name: 'Alex' },
        { id: 5, name: 'Olya' },
        { id: 6, name: 'Sasha' },
      ],
      messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Ho' },
        { id: 3, message: 'He' },
        { id: 4, message: 'Hi-hi' },
        { id: 5, message: 'Hi-ha' },
        { id: 6, message: 'Hi-he' },
      ],
      newMessageBody: '',
    },
    sidebar: {},
  },

  getState() {
    return this._state;
  },

  _callSubscriber() {},

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

    this._callSubscriber(this._state);
  },
};

export default store;

window.store = store;
