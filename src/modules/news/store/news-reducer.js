import { initialState } from './news-initial-state';
import * as types from './news-action-types';

export const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.NEWS_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case types.NEWS_PAGINATION: {
      return {
        ...state,
        isLoadingNews: true,
      };
    }
    case types.NEWS_PAGINATION_FAILURE: {
      return {
        ...state,
        isLoadingNews: false,
      };
    }
    case types.NEWS_PAGINATION_SUCCESS:
      return {
        ...state,
        newsPage: action.payload.newsPage,
        isLoadingNews: false,
        news: [...state.news, ...action.payload.news],
      };
    case types.UPDATE_PAGINATION: {
      return {
        ...state,
        isLoadingUpdates: true,
      };
    }
    case types.UPDATE_PAGINATION_FAILURE: {
      return {
        ...state,
        isLoadingUpdates: false,
      };
    }
    case types.UPDATE_PAGINATION_SUCCESS:
      return {
        ...state,
        updatePage: action.payload.updatePage,
        isLoadingUpdates: false,
        updates: [...state.updates, ...action.payload.updates],
      };
    case types.EVENTS_PAGINATION: {
      return {
        ...state,
        isLoadingEvents: true,
      };
    }
    case types.EVENTS_PAGINATION_FAILURE: {
      return {
        ...state,
        isLoadingEvents: false,
      };
    }
    case types.EVENTS_PAGINATION_SUCCESS:
      return {
        ...state,
        eventPage: action.payload.eventPage,
        isLoadingEvents: false,
        events: [...state.events, ...action.payload.events],
      };
    default:
      return state;
  }
};
