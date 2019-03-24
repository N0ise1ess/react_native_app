import initialState from '../store/initialState';
import * as constants from '../constants';

export default personalityReducer = (state = initialState.personalityReducer, action) => {
  switch (action.type) {
    case constants.PERSONALITY_SEARCHING_SUCCESS:
      return {
        ...state,
        personalities: action.payload,
        personalitiesIsLoading : false
      }
    case constants.PERSONALITY_SEARCHING_PENDING: {
      return {
        ...state,
        personalitiesIsLoading : true
      }
    }
    case constants.PERSONALITY_SEARCHING_FAILURE: {
      return {
        ...state,
        personalitiesIsLoading: false
      }
    }
    case constants.PERSONALITY_UPDATE_SUCCESS:
      return {
        ...state,
        personalities: action.payload,
        personalitiesIsRefreshing : false
      }
    case constants.PERSONALITY_UPDATE_PENDING: {
      return {
        ...state,
        personalitiesIsRefreshing : true
      }
    }
    case constants.PERSONALITY_UPDATE_FAILURE: {
      return {
        ...state,
        personalitiesIsRefreshing: false
      }
    }
    case constants.PERSONALITY_SEARCHING_BY_ID_SUCCESS:
      return {
        ...state,
        personality: action.payload,
        personalityIsLoading : false
      }
    case constants.PERSONALITY_SEARCHING_BY_ID_PENDING: {
      return {
        ...state,
        personalityIsLoading : true
      }
    }
    case constants.PERSONALITY_SEARCHING_BY_ID_FAILURE: {
      return {
        ...state,
        personalityIsLoading: false
      }
    }
    default:
      return state;
  }
}
