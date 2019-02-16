import initialState from '../store/initialState';
import * as types from '../constants';

export default (financeReducer = (state = initialState.financeReducer, action) => {
  switch (action.type) {
    case types.FINANCE_PAYMENT_SUCCESS:
      return {
        ...state,
        payments: action.payload,
      };
    case types.FINANCE_SCHOLARSHIPS_SUCCESS:
      return {
        ...state,
        scholarships: action.payload,
      };
    default:
      return state;
  }
});
