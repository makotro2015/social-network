import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import * as axios from "axios";
import { setAuthUserData } from "./../../redux/auth-reducer.js";

class HeaderContainer extends React.Component {
  componentDidMount() {
    debugger;
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.resultCode === 0) {
          let { email, id, login } = response.data.data;
          this.props.setAuthUserData(email, id, login);
        }
      });
  }
  render() {
    debugger;
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
