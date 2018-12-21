import {
  loginApi
} from '../api';

import {
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_PENDING,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
} from '../constants';

export const login = (values) => async dispatch => {
  dispatch({
    type: LOGIN_PENDING
  });
  try {
    const response = await loginApi(values);
    if (response && response.data) {
      console.log(response);
      if(response.status == '200'){
        dispatch({
          type: LOGIN_SUCCESS,
          payload: response.data.access_token
        });
      }
      else{
        dispatch({
          type: LOGIN_FAILURE,
          payload: response
        })
      }
    }
  } catch (err) {
    console.log(err);
    dispatch({
      type: LOGIN_FAILURE,
      payload: err.response.data.error_description,
      error: true
    });
  }
};

export const logout = () => async dispatch => {
  dispatch({
    type: LOGOUT_SUCCESS
  });
}
