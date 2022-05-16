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
    const isOwner = !currentUserId;
    if (!currentUserId) {
      currentUserId = props.authorizedUserId;
    }
    props.setCurrentUserId(currentUserId);
    return (
      <Component {...props} currentUserId={currentUserId} isOwner={isOwner} />
    );
  };
  return connect(mapStateToPropsForParams, {
    setCurrentUserId,
  })(UseParamsComponent);
};
