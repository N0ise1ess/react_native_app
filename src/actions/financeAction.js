import { financePaymentApi, financeScholarshipsApi } from '../api';
import * as actionTypes from '../constants';

export const getFinancePayment = token => async dispatch => {
  dispatch({
    type: actionTypes.FINANCE_PAYMENT_PENDING,
  });
  try {
    const response = await financePaymentApi(token);
    if (response && response.data) {
      if (response.status == '200') {
        dispatch({
          type: actionTypes.FINANCE_PAYMENT_SUCCESS,
          payload: response.data,
        });
      } else {
        dispatch({
          type: actionTypes.FINANCE_PAYMENT_FAILURE,
          payload: response,
        });
      }
    }
  } catch (err) {
    console.log(err);
    dispatch({
      type: actionTypes.FINANCE_PAYMENT_FAILURE,
      payload: err,
      error: true,
    });
  }
};

export const getFinanceScholarships = token => async dispatch => {
  dispatch({
    type: actionTypes.FINANCE_SCHOLARSHIPS_PENDING,
  });
  try {
    const response = await financeScholarshipsApi(token);
    if (response && response.data) {
      if (response.status == '200') {
        dispatch({
          type: actionTypes.FINANCE_SCHOLARSHIPS_SUCCESS,
          payload: response.data,
        });
      } else {
        dispatch({
          type: actionTypes.FINANCE_SCHOLARSHIPS_FAILURE,
          payload: response,
        });
      }
    }
  } catch (err) {
    console.log(err);
    dispatch({
      type: actionTypes.FINANCE_SCHOLARSHIPS_FAILURE,
      payload: err,
      error: true,
    });
  }
};
