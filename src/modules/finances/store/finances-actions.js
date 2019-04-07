import { financePaymentApi, financeScholarshipsApi } from '../../api';
import * as types from './finances-action-types';

export const getFinancePayment = (token) => async (dispatch) => {
  dispatch({
    type: types.FINANCE_PAYMENT_PENDING,
  });
  try {
    const response = await financePaymentApi(token);
    if (response && response.data) {
      if (response.status == '200') {
        dispatch({
          type: types.FINANCE_PAYMENT_SUCCESS,
          payload: response.data,
        });
      } else {
        dispatch({
          type: types.FINANCE_PAYMENT_FAILURE,
          payload: response,
        });
      }
    }
  } catch (err) {
    console.log(err);
    dispatch({
      type: types.FINANCE_PAYMENT_FAILURE,
      payload: err,
      error: true,
    });
  }
};

export const getFinanceScholarships = (token) => async (dispatch) => {
  dispatch({
    type: types.FINANCE_SCHOLARSHIPS_PENDING,
  });
  try {
    const response = await financeScholarshipsApi(token);
    if (response && response.data) {
      if (response.status == '200') {
        dispatch({
          type: types.FINANCE_SCHOLARSHIPS_SUCCESS,
          payload: response.data,
        });
      } else {
        dispatch({
          type: types.FINANCE_SCHOLARSHIPS_FAILURE,
          payload: response,
        });
      }
    }
  } catch (err) {
    console.log(err);
    dispatch({
      type: types.FINANCE_SCHOLARSHIPS_FAILURE,
      payload: err,
      error: true,
    });
  }
};
