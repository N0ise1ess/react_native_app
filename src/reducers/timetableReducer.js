import initialState from '../store/initialState';
import {
  SEARCH_SUCCESS,
  SEARCH_FAILURE,
  SEARCH_PENDING,
  TIMETABLE_GET_FAILURE,
  TIMETABLE_GET_SUCCESS,
  TIMETABLE_GET_PENDING
} from '../constants';

export default timetableReducer = (state = initialState.timetableReducer, action) => {
  switch (action.type) {
    case SEARCH_SUCCESS:
      return {
        ...state,
        timeTableLoading: false,
        suggestions: action.payload,
        timetables: []
      }
    case SEARCH_PENDING:
      return {
        ...state,
        timeTableLoading: true,
        timetables: []
      }
    case SEARCH_FAILURE:
      return {
        ...state,
        timeTableLoading: false,
        errorCode: action.payload.message,
      }
    case TIMETABLE_GET_SUCCESS:
      return {
        ...state,
        timeTableLoading: false,
        timetables: action.payload,
        suggestions: []
      }
    case TIMETABLE_GET_PENDING:
      return {
        ...state,
        timeTableLoading: true,
        suggestions: []
      }
    case TIMETABLE_GET_FAILURE:
      return {
        ...state,
        timeTableLoading: false,
        errorCode: action.payload.message,
      }
    default:
      return state;
  }
}
