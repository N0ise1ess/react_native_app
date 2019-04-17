import * as api from '../../api';
import * as types from './reports-action-types';

export const getYearsOfReports = (token) => async dispatch => {
  dispatch({type: types.GET_YEARS_OF_REPORTS_PENDING});
  try {
    let { data } = await api.getYearsOfReports(token);
    data &&
      dispatch({
        type: types.GET_YEARS_OF_REPORTS_SUCCESS,
        payload: data,
      });
  } catch(e) {
    dispatch({type: types.GET_YEARS_OF_REPORTS_FAIL});
  }
};

export const getReportsOfYear = (token, yearInfo) => async dispatch => {
    dispatch({type: types.GET_REPORTS_OF_YEARS_PENDING});
    try {
      let { data } = await api.getReportsOfYear({token, data: yearInfo});
      data &&
        dispatch({
          type: types.GET_REPORTS_OF_YEARS_SUCCESS,
          payload: data,
        });
    } catch(e) {
      dispatch({type: types.GET_REPORTS_OF_YEARS_FAIL});
    }
  };