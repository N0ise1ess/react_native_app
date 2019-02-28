import initialState from '../store/initialState';
import {
  PERSONALITY_SEARCHING_FAILURE,
  PERSONALITY_SEARCHING_PENDING,
  PERSONALITY_SEARCHING_SUCCESS,
} from '../constants';

export default personalityReducer = (state = initialState.personalityReducer, action) => {
  switch (action.type) {
    case PERSONALITY_SEARCHING_SUCCESS:
      return {
        ...state,
        personalities: action.payload,
        personalitiesIsLoading : false
      }
    case PERSONALITY_SEARCHING_PENDING: {
      return {
        ...state,
        personalitiesIsLoading : true
      }
    }
    case PERSONALITY_SEARCHING_FAILURE: {
      return {
        ...state,
        personalitiesIsLoading: false
      }
    }
    default:
      return state;
  }
}
