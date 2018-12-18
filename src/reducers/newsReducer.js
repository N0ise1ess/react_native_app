import initialState from '../store/initialState';
import {
  NEWS_PENDING,
  NEWS_SUCCESS,
  NEWS_FAILURE
} from '../constants';

export default newsReducer = (state = initialState.newsReducer, action) => {
  switch (action.type) {
    case NEWS_SUCCESS:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state;
  }
}
