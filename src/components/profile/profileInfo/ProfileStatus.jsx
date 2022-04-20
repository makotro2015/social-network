import React from "react";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };

  activateEditMode = () => {
    this.setState({
      editMode: true,
    });
  };

  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.state.status);
  };
  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value,
    });
  };

  render() {
    return (
      <>
        {this.state.editMode ? (
          <input
            onBlur={this.deactivateEditMode}
            onChange={this.onStatusChange}
            value={this.state.status}
            autoFocus
          />
        ) : (
          <div onDoubleClick={this.activateEditMode}>
            {this.props.status || "Статус не добавлен"}
          </div>
        )}
      </>
    );
  }
}

export default ProfileStatus;
