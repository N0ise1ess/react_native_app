import {
  financePaymentApi
} from '../api';

import {
  FINANCE_PAYMENT_PENDING,
  FINANCE_PAYMENT_SUCCESS,
  FINANCE_PAYMENT_FAILURE,
  FINANCE_SHLRSHIP_PENDING,
  FINANCE_SHLRSHIP_SUCCESS,
  FINANCE_SHLRSHIP_FAILURE,
} from '../constants';

export const getFinancePayment = (token) => async dispatch => {
  dispatch({
    type: FINANCE_PAYMENT_PENDING
  });
  try {
    const response = await financePaymentApi(token);
    if (response && response.data) {
      console.log(response);
      if(response.status == '200'){
        dispatch({
          type: FINANCE_PAYMENT_SUCCESS,
          payload: response.data
        });
      }
      else{
        dispatch({
          type: FINANCE_PAYMENT_FAILURE,
          payload: response
        })
      }
    }
  } catch (err) {
    console.log(err);
    dispatch({
      type: FINANCE_PAYMENT_FAILURE,
      payload: err,
      error: true
    });
  }
};
