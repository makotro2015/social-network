import {
  updateNewMessageBody,
  sendMessage,
} from "./../../redux/dialogs-reducer.js";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthNavigateComponent } from "../../hoc/withAuthNavigate.js";

let AuthNavigateComponent = withAuthNavigateComponent(Dialogs);

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
})(AuthNavigateComponent);

export default DialogsContainer;
