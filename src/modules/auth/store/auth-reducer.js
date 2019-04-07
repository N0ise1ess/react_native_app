import { initialState } from './auth-initial-state';
import * as actionTypes from './auth-action-types';

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGOUT_SUCCESS:
      return {
        token: null,
        userStatus: 'guest',
      };
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload,
        authLoading: false,
        userStatus: 'student',
      };
    case actionTypes.LOGIN_PENDING:
      return {
        ...state,
        authLoading: true,
      };
    case actionTypes.LOGIN_FAILURE:
      return {
        ...state,
        authLoading: false,
        errorMessage: action.payload,
        userStatus: 'guest',
      };
    case actionTypes.RESET_PASSWORD:
      return {
        ...state,
        sendEmailLoading: true,
      };
    case actionTypes.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        sendEmailLoading: false,
        isSendEmailFail: false,
        isFirstStepResetPassword: false,
      };
    case actionTypes.RESET_PASSWORD_FAIL:
      return {
        ...state,
        sendEmailLoading: false,
        isSendEmailFail: true,
      };
    case actionTypes.INIT_FIRST_STEP_RESET_PASSWORD:
      return {
        ...state,
        isFirstStepResetPassword: true,
      };
    case actionTypes.SET_ERROR_RESET_PASSWORD:
      return {
        ...state,
        sendEmailLoading: false,
        errorText: action.payload,
      };
    case actionTypes.PHONE_EDIT_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case actionTypes.PHONE_EDIT_PENDING:
      return {
        ...state,
      };
    case actionTypes.PHONE_EDIT_FAILURE:
      return {
        ...state,
      };
    case actionTypes.GET_RAITING_PENDING:
      return {
        ...state,
        isLoadingRaiting: true,
      };
    case actionTypes.GET_RAITING_SUCCESS:
      return {
        ...state,
        isLoadingRaiting: false,
        userRaiting: action.payload,
      };
    case actionTypes.GET_RAITING_FAILURE:
      return {
        ...state,
        isLoadingRaiting: false,
      };
    default:
      return state;
  }
};
