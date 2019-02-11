import initialState from '../store/initialState';
import * as constants from '../constants';

export default authReducer = (state = initialState.authReducer, action) => {
  switch (action.type) {
    case constants.LOGOUT_SUCCESS:
      return {
        token: null,
        userStatus: 'guest',
      }
    case constants.LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload,
        authLoading: false,
        userStatus: 'student',
      }
    case constants.LOGIN_PENDING:
      return {
        ...state,
        authLoading: true,
      }
    case constants.LOGIN_FAILURE:
      return {
        ...state,
        authLoading: false,
        errorMessage: action.payload,
        userStatus: 'guest'
      }
    case constants.RESET_PASSWORD:
      return {
        ...state,
        authLoading: true,
      }
    case constants.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        authLoading: false,
      }
    default:
      return state;
  }
}
