const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "hello", likeCount: 12 },
        { id: 2, message: "Alena", likeCount: 10 },
        { id: 3, message: "name", likeCount: 2 },
        { id: 4, message: "family", likeCount: 1 },
      ],
      newPostText: "",
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Alena" },
        { id: 2, name: "Lena" },
        { id: 3, name: "Elena" },
        { id: 4, name: "Alex" },
        { id: 5, name: "Olya" },
        { id: 6, name: "Sasha" },
      ],
      messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "Ho" },
        { id: 3, message: "He" },
        { id: 4, message: "Hi-hi" },
        { id: 5, message: "Hi-ha" },
        { id: 6, message: "Hi-he" },
      ],
      sidebar: {},
    },
  },

  getState() {
    return this._state;
  },

  _callSubscriber() {},

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      const newPost = {
        id: 1,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else {
      console.warn("Нет такого метода, ошибка в названии типа!");
    }
  },
};

export const addPostActionCreator = () => ({ type: "ADD-POST" });
export const updateNewPostTextActionCreator = (text) => ({
  type: "UPDATE-NEW-POST-TEXT",
  newText: text,
});

export default store;

window.store = store;
