import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  setCurrentUserId,
  getUserProfileThunkCreator,
} from "./../../redux/profile-reducer.js";
import { useParams } from "react-router-dom";
import { withAuthNavigateComponent } from "../../hoc/withAuthNavigate";

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.getUserProfileThunkCreator(this.props.currentUserId);
  }

  render() {
    return (
      <>
        <Profile {...this.props} profile={this.props.profile} />
      </>
    );
  }
}

let AuthNavigateComponent = withAuthNavigateComponent(ProfileContainer);

const WithUseParamsProfileContainer = (props) => {
  let currentUserId = useParams().userId;
  if (!currentUserId) {
    currentUserId = props.userId;
  }
  props.setCurrentUserId(currentUserId);
  return <AuthNavigateComponent {...props} currentUserId={currentUserId} />;
};

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  userId: state.profilePage.currentUserId,
  isFetching: state.profilePage.isFetching,
});

export default connect(mapStateToProps, {
  setCurrentUserId,
  getUserProfileThunkCreator,
})(WithUseParamsProfileContainer);
