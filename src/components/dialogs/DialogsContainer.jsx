import { connect } from 'react-redux';
import { compose } from 'redux';
import { sendMessage } from '../../redux/dialogs-reducer.js';
import Dialogs from './Dialogs';
import withAuthNavigateComponent from '../../hoc/withAuthNavigate.js';

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
  withAuthNavigateComponent,
)(Dialogs);
