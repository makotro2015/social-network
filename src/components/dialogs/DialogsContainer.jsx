import {
  updateNewMessageBody,
  sendMessage,
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

const DialogsContainer = connect(mapStateToProps, {
  updateNewMessageBody,
  sendMessage,
})(Dialogs);

export default DialogsContainer;
