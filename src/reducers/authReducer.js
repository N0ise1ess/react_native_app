import initialState from '../store/initialState';
import * as constants from '../constants';

export default (authReducer = (state = initialState.authReducer, action) => {
  switch (action.type) {
    case constants.LOGOUT_SUCCESS:
      return {
        token: null,
        userStatus: 'guest'
      };
    case constants.LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload,
        authLoading: false,
        userStatus: 'student'
      };
    case constants.LOGIN_PENDING:
      return {
        ...state,
        authLoading: true
      };
    case constants.LOGIN_FAILURE:
      return {
        ...state,
        authLoading: false,
        errorMessage: action.payload,
        userStatus: 'guest'
      };
    case constants.RESET_PASSWORD:
      return {
        ...state,
        sendEmailLoading: true
      };
    case constants.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        sendEmailLoading: false,
        isSendEmailFail: false,
        isFirstStepResetPassword: false
      };
    case constants.RESET_PASSWORD_FAIL:
      return {
        ...state,
        sendEmailLoading: false,
        isSendEmailFail: true
      };
    case constants.INIT_FIRST_STEP_RESET_PASSWORD:
      return {
        ...state,
        isFirstStepResetPassword: true
      };
    case constants.SET_ERROR_RESET_PASSWORD:
      return {
        ...state,
        sendEmailLoading: false,
        errorText: action.payload
      };
    case constants.PHONE_EDIT_SUCCESS:
      return {
        ...state,
        ...action.payload
      };
    case constants.PHONE_EDIT_PENDING:
      return {
        ...state
      };
    case constants.PHONE_EDIT_FAILURE:
      return {
        ...state
      };

    default:
      return state;
  }
});
