import initialState from '../store/initialState';
import {
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  LOGOUT_PENDING,
} from '../constants';

export default authReducer = (state = initialState.authReducer, action) => {
  switch (action.type) {
    case LOGOUT_SUCCESS:
      return {
        token: null,
        userStatus: 'guest',
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload,
        authLoading: false,
        userStatus: 'student',
      }
    case LOGIN_PENDING:
      return {
        ...state,
        authLoading: true,
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        authLoading: false,
        errorMessage: action.payload,
        userStatus: 'guest'
      }
    default:
      return state;
  }
}
