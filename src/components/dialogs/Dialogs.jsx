import React from 'react';
import s from './Dialogs.module.scss';
import DialogItem from './dialog/DialogItem';
import Message from './message/Message';
import { Field } from 'redux-form';
import { reduxForm } from 'redux-form';
import { Element } from '../common/formsControls/FormsControls';
import {
  required,
  maxLengthCreator,
} from './../../assets/validation/validation';

const maxLength10 = maxLengthCreator(10);

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder="add message"
          name="newMessageBody"
          component={Element}
          elementtype="textarea"
          validate={[required, maxLength10]}
        />
      </div>
      <div>
        <button> Send</button>
      </div>
    </form>
  );
};

const AddMessageReduxForm = reduxForm({
  form: 'dialogAddMessageForm',
})(AddMessageForm);

function Dialogs(props) {
  const dialogsElements = props.dialogs.map((d, i) => (
    <DialogItem key={i} name={d.name} id={d.id} />
  ));
  const messagesElements = props.messages.map((m, i) => (
    <Message key={i} message={m.message} />
  ));

  const addNewMessage = (formData) => {
    props.sendMessage(formData.newMessageBody);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <AddMessageReduxForm onSubmit={addNewMessage} />
      </div>
    </div>
  );
}

export default Dialogs;
