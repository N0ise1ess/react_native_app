import * as types from './timetable-action-types';
import { initialState } from './timetable-initial-state';

export const timetableReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SEARCH_SUCCESS:
      return {
        ...state,
        timeTableLoading: false,
        suggestions: action.payload,
        timetables: [],
      };
    case types.SEARCH_PENDING:
      return {
        ...state,
        timeTableLoading: true,
        timetables: [],
      };
    case types.SEARCH_FAILURE:
      return {
        ...state,
        timeTableLoading: false,
        errorCode: action.payload.message,
      };
    case types.TIMETABLE_GET_SUCCESS:
      return {
        ...state,
        timeTableLoading: false,
        timetables: action.payload,
      };
    case types.TIMETABLE_GET_PENDING:
      return {
        ...state,
        timeTableLoading: true,
      };
    case types.TIMETABLE_GET_FAILURE:
      return {
        ...state,
        timeTableLoading: false,
        errorCode: action.payload.message,
      };
    default:
      return state;
  }
};
