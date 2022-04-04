import React from "react";
import {
  updateNewMessageBodyActionCreator,
  sendMessageActionCreator,
} from "./../../redux/dialogs-reducer.js";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    newMessageBody: state.dialogsPage.newMessageBody,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBodyActionCreator: (body) => {
      dispatch(updateNewMessageBodyActionCreator(body));
    },
    sendMessageActionCreator: () => {
      dispatch(sendMessageActionCreator());
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
