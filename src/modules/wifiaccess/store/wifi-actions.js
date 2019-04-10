import * as types from './wifi-action-types';
import * as api from '../../api';

export const getWifi = (token) => async (dispatch) => {
  dispatch({
    type: types.GET_WIFI_PENDING,
  });
  try {
    let { data } = await api.getWifi(token);
    dispatch({
      type: types.GET_WIFI_SUCCESS,
      payload: data,
    });
  } catch (e) {
    dispatch({
      type: types.GET_WIFI_FAILURE,
    });
  }
};
