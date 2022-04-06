const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";

let initialState = {
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
  newMessageBody: "",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.newText,
      };

    case SEND_MESSAGE:
      const body = state.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 6, message: body }],
        newMessageBody: "",
      };

    default:
      return state;
  }
};

export const sendMessage = () => ({ type: "SEND-MESSAGE" });
export const updateNewMessageBody = (text) => ({
  type: "UPDATE-NEW-MESSAGE-BODY",
  newText: text,
});

export default dialogsReducer;
