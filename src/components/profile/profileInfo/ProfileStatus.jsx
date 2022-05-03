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

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.status !== this.props.status) {
  //     this.setState({
  //       status: this.props.status,
  //     });
  //   }
  // }

  return (
    <>
      {editMode ? (
        <input
          onBlur={deactivateEditMode}
          onChange={onStatusChange}
          value={status}
          autoFocus
        />
      ) : (
        <div onDoubleClick={activateEditMode}>
          {props.status || 'Статус не добавлен'}
        </div>
      )}
    </>
  );
};

export default ProfileStatus;

// import React from 'react';

// class ProfileStatus extends React.Component {
//   state = {
//     editMode: false,
//     status: this.props.status,
//   };

//   activateEditMode = () => {
//     this.setState({
//       editMode: true,
//     });
//   };

//   deactivateEditMode = () => {
//     this.setState({
//       editMode: false,
//     });
//     this.props.updateStatus(this.state.status);
//   };

//   onStatusChange = (e) => {
//     this.setState({
//       status: e.currentTarget.value,
//     });
//   };

//   componentDidUpdate(prevProps, prevState) {
//     if (prevProps.status !== this.props.status) {
//       this.setState({
//         status: this.props.status,
//       });
//     }
//   }

//   render() {
//     return (
//       <>
//         {this.state.editMode ? (
//           <input
//             onBlur={this.deactivateEditMode}
//             onChange={this.onStatusChange}
//             value={this.state.status}
//             autoFocus
//           />
//         ) : (
//           <div onDoubleClick={this.activateEditMode}>
//             {this.props.status || 'Статус не добавлен'}
//           </div>
//         )}
//       </>
//     );
//   }
// }

// export default ProfileStatus;
