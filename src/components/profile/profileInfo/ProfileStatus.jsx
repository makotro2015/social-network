import React, { useEffect, useState } from 'react';

const ProfileStatus = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <>
      {editMode ? (
        <>
          <label>Статус:</label>
          <input
            onBlur={deactivateEditMode}
            onChange={onStatusChange}
            value={status}
            autoFocus
          />
        </>
      ) : (
        <div onDoubleClick={activateEditMode}>
         Статус: {props.status || 'Статус не добавлен'}
        </div>
      )}
    </>
  );
};

export default ProfileStatus;
