const SEND_MESSAGE = 'SEND-MESSAGE';

const initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
  case SEND_MESSAGE:
    return {
      ...state,
      messages: [...state.messages, { id: 6, message: action.message }],
    };

  default:
    return state;
  }
};

export const sendMessage = (message) => ({ type: 'SEND-MESSAGE', message });

export default dialogsReducer;
