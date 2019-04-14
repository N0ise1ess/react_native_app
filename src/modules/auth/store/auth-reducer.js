import { initialState } from './auth-initial-state';
import * as types from './auth-action-types';

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGOUT_SUCCESS:
      return {
        token: null,
        userStatus: 'guest',
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload,
        authLoading: false,
        userStatus: 'student',
      };
    case types.LOGIN_PENDING:
      return {
        ...state,
        errorMessage: null,
        authLoading: true,
      };
    case types.LOGIN_FAILURE:
      return {
        ...state,
        authLoading: false,
        errorMessage: action.payload,
        userStatus: 'guest',
      };
    case types.RESET_PASSWORD:
      return {
        ...state,
        sendEmailLoading: true,
      };
    case types.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        sendEmailLoading: false,
        isSendEmailFail: false,
        isFirstStepResetPassword: false,
      };
    case types.RESET_PASSWORD_FAIL:
      return {
        ...state,
        sendEmailLoading: false,
        isSendEmailFail: true,
      };
    case types.INIT_FIRST_STEP_RESET_PASSWORD:
      return {
        ...state,
        isFirstStepResetPassword: true,
      };
    case types.SET_ERROR_RESET_PASSWORD:
      return {
        ...state,
        sendEmailLoading: false,
        errorText: action.payload,
      };
    case types.PHONE_EDIT_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case types.PHONE_EDIT_PENDING:
      return {
        ...state,
      };
    case types.PHONE_EDIT_FAILURE:
      return {
        ...state,
      };
    case types.GET_RAITING_PENDING:
      return {
        ...state,
        isLoadingRaiting: true,
      };
    case types.GET_RAITING_SUCCESS:
      return {
        ...state,
        isLoadingRaiting: false,
        userRaiting: action.payload,
      };
    case types.GET_RAITING_FAILURE:
      return {
        ...state,
        isLoadingRaiting: false,
      };
    default:
      return state;
  }
};
