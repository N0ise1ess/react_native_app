import { financePaymentApi, financeScholarshipsApi, financeDebtsApi, financeStipendApi} from '../../api';
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

export const getDebtsPayment = (token) => async (dispatch) => {
  dispatch({
    type: types.FINANCE_DEBTS_PENDING,
  });
  try {
    const response = await financeDebtsApi(token);
    if (response && response.data) {
      if (response.status == '200') {
        dispatch({
          type: types.FINANCE_DEBTS_SUCCESS,
          payload: response.data,
        });
      } else {
        dispatch({
          type: types.FINANCE_DEBTS_FAILURE,
          payload: response,
        });
      }
    }
  } catch (err) {
    console.log(err);
    dispatch({
      type: types.FINANCE_DEBTS_FAILURE,
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

export const getFinanceStipend = (token) => async (dispatch) => {
  dispatch({
    type: types.FINANCE_STIPEND_PENDING,
  });
  try {
    const response = await financeStipendApi(token);
    if (response && response.data) {
      if (response.status == '200') {
        dispatch({
          type: types.FINANCE_STIPEND_SUCCESS,
          payload: response.data,
        });
      } else {
        dispatch({
          type: types.FINANCE_STIPEND_FAILURE,
          payload: response,
        });
      }
    }
  } catch (err) {
    console.log(err);
    dispatch({
      type: types.FINANCE_STIPEND_FAILURE,
      payload: err,
      error: true,
    });
  }
};
