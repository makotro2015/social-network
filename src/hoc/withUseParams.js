import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setCurrentUserId } from './../redux/profile-reducer.js';

const mapStateToPropsForParams = (state) => {
  return {
    userId: state.profilePage.currentUserId,
    authorizedUserId: state.auth.id,
  };
};

export const withUseParamsComponent = (Component) => {
  const UseParamsComponent = (props) => {
    let currentUserId = useParams().userId;
    if (!currentUserId) {
      currentUserId = props.authorizedUserId;
    }
    props.setCurrentUserId(currentUserId);
    return <Component {...props} currentUserId={currentUserId} />;
  };
  return connect(mapStateToPropsForParams, {
    setCurrentUserId,
  })(UseParamsComponent);
};
