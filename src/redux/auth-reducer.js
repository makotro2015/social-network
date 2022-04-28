import { authAPI } from '../api/api';
import { stopSubmit } from 'redux-form';

const SET_USER_DATA = 'SET_USER_DATA';

const initialState = {
  email: null,
  id: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
  case SET_USER_DATA:
    return {
      ...state,
      ...action.data,
    };

  default:
    return state;
  }
};

export const setAuthUserData = (email, id, login, isAuth) => ({
  type: 'SET_USER_DATA',
  data: { email, id, login, isAuth },
});

export const getAuthUserDataThunkCreator = () => (dispatch) => {
  return authAPI.me().then((data) => {
    if (data.resultCode === 0) {
      const { email, id, login } = data.data;
      dispatch(setAuthUserData(email, id, login, true));
    }
  });
};

export const login = (email, password, rememberMe) => (dispatch) => {
  authAPI.login(email, password, rememberMe).then((data) => {
    if (data.resultCode === 0) {
      dispatch(getAuthUserDataThunkCreator());
    } else {
      const message =
        data.messages.length > 0 ? data.messages[0] : 'Что-то пошло не так...';
      dispatch(stopSubmit('login', { _error: message }));
    }
  });
};

export const logout = () => (dispatch) => {
  authAPI.logout().then((data) => {
    if (data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
    }
  });
};

export default authReducer;
