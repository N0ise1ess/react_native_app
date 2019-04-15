import { initialState } from './finances-initial-state';
import * as types from './finances-action-types';

export const financesReducer = (state = initialState, action) => {
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
    case types.FINANCE_DEBTS_SUCCESS:
    return {
      ...state,
      debts: action.payload,
    };
    case types.FINANCE_STIPEND_SUCCESS:
    return {
      ...state,
      stipend: action.payload,
    };
    default:
      return state;
  }
};
