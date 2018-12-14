import {
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from '../constants';

const initialState = {
  token: null,
  errorMessage: '',
}

export default authReducer = (state = initialState, action) => {
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
