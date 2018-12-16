import initialState from '../store/initialState';
import {
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from '../constants';

export default authReducer = (state = initialState.authReducer, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload
      }
    default:
      return state;
  }
}
