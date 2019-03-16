import initialState from '../store/initialState';
import {
  DEPARTMENTS_SUCCESS,
  DEPARTMENTS_PENDING,
  DEPARTMENTS_FAILURE,
  GET_BUILDING_DORMS_SUCCESS,
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
    case GET_BUILDING_DORMS_SUCCESS: {
      return {
        ...state,
        buildingsDorms: action.payload,
      }
    }
    default:
      return state;
  }
}
