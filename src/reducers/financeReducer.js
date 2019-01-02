import initialState from '../store/initialState';
import {
  FINANCE_PAYMENT_SUCCESS,
  FINANCE_PAYMENT_PENDING,
  FINANCE_PAYMENT_FAILURE,
} from '../constants';

export default financeReducer = (state = initialState.financeReducer, action) => {
  switch (action.type) {
    case FINANCE_PAYMENT_SUCCESS:
      return {
        ...state,
        financeData: action.payload,
      }
    default:
      return state;
  }
}
