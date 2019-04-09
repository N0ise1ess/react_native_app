import { initialState } from './loading-initial-state';
import * as types from './loading-action-types';

export const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_PROGRESS:
      return {
        ...state,
        ...action.payload,
      };
    case types.LOAD_SUCCESS:
      return {
        ...state,
        isLoaded: true,
      };
    default:
      return state;
  }
};
