import jwtDecode from 'jwt-decode';
import * as api from '../api';
import * as constants from '../constants';

export const login = values => async dispatch => {
  dispatch({
    type: constants.LOGIN_PENDING,
  });
  try {
    const response = await api.loginApi(values);
    if (response && response.data) {
      console.log(response);
      if (response.status == '200') {
        const decoded = jwtDecode(response.data.access_token);
        dispatch({
          type: constants.LOGIN_SUCCESS,
          payload: {
            ...decoded,
            token: response.data.access_token,
          },
        });
      } else {
        dispatch({
          type: constants.LOGIN_FAILURE,
          payload: response,
        });
      }
    }
  } catch (err) {
    console.log(err);
    dispatch({
      type: constants.LOGIN_FAILURE,
      payload: err.response.data.error_description,
      error: true,
    });
  }
};

export const logout = () => async dispatch => {
  dispatch({
    type: constants.LOGOUT_SUCCESS,
  });
};

export const initFirstStepResetPassword = () => async dispatch => {
  dispatch({
    type: constants.INIT_FIRST_STEP_RESET_PASSWORD,
  });
};

export const resetPassword = payload => async dispatch => {
  try {
    dispatch({
      type: constants.RESET_PASSWORD,
    });
    const { data } = await api.resetPassword(payload);
    data &&
      dispatch({
        type: constants.RESET_PASSWORD_SUCCESS,
      });
  } catch (e) {
    dispatch({
      type: constants.SET_ERROR_RESET_PASSWORD,
      payload: 'Адрес отсутствует в системе, \nпроверьте его правильность',
    });
  }
};

export const setErrorResetPassword = payload => async dispatch => {
  dispatch({
    type: constants.SET_ERROR_RESET_PASSWORD,
    payload,
  });
};

export const editPhoneNumber = (phoneNumber, token) => async dispatch => {
  try {
    dispatch({
      type: constants.PHONE_EDIT_PENDING,
    });
    let { data } = await api.editPhoneNumber(phoneNumber, token);
    data &&
      dispatch({
        type: constants.PHONE_EDIT_SUCCESS,
        payload: { phoneNumber },
      });
  } catch (e) {
    dispatch({
      type: constants.PHONE_EDIT_FAILURE,
      payload: 'Произошла ошибка при сохранении данных',
    });
  }
};
