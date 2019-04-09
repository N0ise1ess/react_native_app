import * as types from './scratchbook-action-types';
import { initialState } from './scratchbook-initial-state';

export const scratchBookReducer = (state = initialState.scratchBook, action) => {
  switch (action.type) {
    case types.GET_DISCIPLINE_LIST_PROGRESS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        dataScratchBook: action.payload,
      };
    case types.GET_DISCIPLINE_LIST_PROGRESS:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_DISCIPLINE_LIST_PROGRESS_FAIL:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return { ...state };
  }
};
