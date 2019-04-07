import { initialState } from './contacts-initial-state';
import * as types from './contacts-action-types';
export const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_OPENED_ID:
      return {
        ...state,
        openedIdItem: action.payload,
      };
    case types.DEPARTMENTS_SUCCESS:
      return {
        ...state,
        departments: action.payload,
        departmentsLoading: false,
      };
    case types.DEPARTMENTS_PENDING: {
      return {
        ...state,
        departmentsLoading: true,
      };
    }
    case types.DEPARTMENTS_FAILURE: {
      return {
        ...state,
        departmentsLoading: false,
      };
    }
    case types.GET_BUILDING_DORMS_SUCCESS: {
      return {
        ...state,
        buildingsDorms: action.payload,
      };
    }
    default:
      return state;
  }
};
