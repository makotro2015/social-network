import { getAuthUserDataThunkCreator } from './auth-reducer';

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

const initialState = {
  isInitialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
  case INITIALIZED_SUCCESS:
    return {
      ...state,
      isInitialized: true,
    };

  default:
    return state;
  }
};

export const initializedSuccess = () => ({
  type: 'INITIALIZED_SUCCESS',
});

export const initializedApp = () => (dispatch) => {
  const authUserData = dispatch(getAuthUserDataThunkCreator());
  Promise.all([authUserData])
    .then( () => {
      dispatch(initializedSuccess());
    });
  
};

export default appReducer;
