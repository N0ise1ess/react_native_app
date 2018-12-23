import jwtDecode from 'jwt-decode';
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

function parseJwt (token) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace('-', '+').replace('_', '/');
  return JSON.parse(window.atob(base64));
};

export const login = (values) => async dispatch => {
  dispatch({
    type: LOGIN_PENDING
  });
  try {
    const response = await loginApi(values);
    if (response && response.data) {
      console.log(response);
      if(response.status == '200'){
        const decoded = jwtDecode(response.data.access_token);
        dispatch({
          type: LOGIN_SUCCESS,
          payload: {
            ...decoded,
            token: response.data.access_token
          }
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
