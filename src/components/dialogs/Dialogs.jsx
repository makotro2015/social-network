import React from "react";
import s from "./Dialogs.module.scss";
import DialogItem from "./dialog/DialogItem";
import Message from "./message/Message";

function Dialogs(props) {
  let dialogsElements = props.dialogs.map((d, i) => (
    <DialogItem key={i} name={d.name} id={d.id} />
  ));
  let messagesElements = props.messages.map((m, i) => (
    <Message key={i} message={m.message} />
  ));

  const onSendMessageClick = () => {
    props.sendMessageActionCreator();
  };

  const onNewMessageChange = (e) => {
    const body = e.target.value;
    props.updateNewMessageBodyActionCreator(body);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <div>
          <div>
            <textarea
              placeholder="add message"
              value={props.newMessageBody}
              onChange={onNewMessageChange}
            ></textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}> Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
