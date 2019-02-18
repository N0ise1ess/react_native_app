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
      }
    default:
      return state;
  }
}
