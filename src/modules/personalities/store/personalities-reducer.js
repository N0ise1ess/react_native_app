import { initialState } from './personalities-initial-state';
import * as types from './personalities-action-types';

export const personalitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.PERSONALITY_SEARCHING_SUCCESS:
      return {
        ...state,
        personalities: action.payload,
        personalitiesIsLoading: false,
      };
    case types.PERSONALITY_SEARCHING_PENDING: {
      return {
        ...state,
        personalitiesIsLoading: true,
      };
    }
    case types.PERSONALITY_SEARCHING_FAILURE: {
      return {
        ...state,
        personalitiesIsLoading: false,
      };
    }
    case types.PERSONALITY_UPDATE_SUCCESS:
      return {
        ...state,
        personalities: action.payload,
        personalitiesIsRefreshing: false,
      };
    case types.PERSONALITY_UPDATE_PENDING: {
      return {
        ...state,
        personalitiesIsRefreshing: true,
      };
    }
    case types.PERSONALITY_UPDATE_FAILURE: {
      return {
        ...state,
        personalitiesIsRefreshing: false,
      };
    }
    case types.PERSONALITY_SEARCHING_BY_ID_SUCCESS:
      return {
        ...state,
        personality: action.payload,
        personalityIsLoading: false,
      };
    case types.PERSONALITY_SEARCHING_BY_ID_PENDING: {
      return {
        ...state,
        personalityIsLoading: true,
      };
    }
    case types.PERSONALITY_SEARCHING_BY_ID_FAILURE: {
      return {
        ...state,
        personalityIsLoading: false,
      };
    }
    default:
      return state;
  }
};
