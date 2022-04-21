import { sendMessage } from "./../../redux/dialogs-reducer.js";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthNavigateComponent } from "../../hoc/withAuthNavigate.js";
import { compose } from "redux";

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
  };
};

export default compose(
  connect(mapStateToProps, {
    sendMessage,
  }),
  withAuthNavigateComponent
)(Dialogs);
