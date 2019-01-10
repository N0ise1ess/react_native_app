import initialState from '../store/initialState';
import {
  SEARCH_SUCCESS,
  SEARCH_FAILURE,
  SEARCH_PENDING,
} from '../constants';

export default timetableReducer = (state = initialState.timetableReducer, action) => {
  switch (action.type) {
    case SEARCH_SUCCESS:
      return {
        ...state,
        timeTableLoading: false,
        ...action.payload,
      }
    case SEARCH_PENDING:
      return {
        ...state,
        timeTableLoading: true,
      }
    case SEARCH_FAILURE:
      return {
        ...state,
        timeTableLoading: false,
        errorCode: action.payload.message,
      }
    default:
      return state;
  }
}
