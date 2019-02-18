import initialState from '../store/initialState';
import {
  DEPARTMENTS_SUCCESS,
  DEPARTMENTS_PENDING,
  DEPARTMENTS_FAILURE,
} from '../constants';

export default departmentReducer = (state = initialState.departmentReducer, action) => {
  switch (action.type) {
    case DEPARTMENTS_SUCCESS:
      return {
        ...state,
        departments: action.payload,
        departmentsLoading : false
      }
    case DEPARTMENTS_PENDING: {
      return {
        ...state,
        departmentsLoading : true
      }
    }
    case DEPARTMENTS_FAILURE: {
      return {
        ...state,
        departmentsLoading : false
      }
    }
    default:
      return state;
  }
}
