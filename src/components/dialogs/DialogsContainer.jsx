import React from "react";
import s from "./Dialogs.module.scss";
import DialogItem from "./dialog/DialogItem";
import Message from "./message/Message";
import {
  updateNewMessageBodyActionCreator,
  sendMessageActionCreator,
} from "./../../redux/dialogs.reducer.js";
import Dialogs from "./Dialogs";

function DialogsContainer(props) {
  const state = props.store.getState();

  const onSendMessageClick = () => {
    props.store.dispatch(sendMessageActionCreator());
  };

  const onNewMessageChange = (body) => {
    props.store.dispatch(updateNewMessageBodyActionCreator(body));
  };

  return (
    <Dialogs
      dialogs={state.dialogsPage.dialogs}
      messages={state.dialogsPage.messages}
      newMessageBody={state.dialogsPage.newMessageBody}
      sendMessageActionCreator={onSendMessageClick}
      updateNewMessageBodyActionCreator={onNewMessageChange}
    />
  );
}

export default DialogsContainer;
