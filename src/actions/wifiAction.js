import * as constants from '../constants/index';
import * as api from '../api';

export const getWifi = (token) => async (dispatch) => {
    dispatch({
        type: constants.GET_WIFI_PENDING,
    });
    try {
        let { data } = await api.getWifi(token);
        dispatch({
            type: constants.GET_WIFI_SUCCESS,
            payload: data,
        })
    } catch (e) {
        dispatch({
            type: constants.GET_WIFI_FAILURE,
        })
    }
}

