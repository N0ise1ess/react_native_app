import initialState from '../store/initialState';
import {
  NEWS_PENDING,
  NEWS_SUCCESS,
  NEWS_FAILURE,
  NEWS_PAGINATION_SUCCESS,
  NEWS_PAGINATION_FAILURE,
  NEWS_PAGINATION,
  UPDATE_PAGINATION_SUCCESS,
  UPDATE_PAGINATION_FAILURE,
  UPDATE_PAGINATION,
  EVENTS_PAGINATION_SUCCESS,
  EVENTS_PAGINATION_FAILURE,
  EVENTS_PAGINATION,
} from '../constants';

export default newsReducer = (state = initialState.newsReducer, action) => {
  switch (action.type) {
    case NEWS_SUCCESS:
      return {
        ...state,
        ...action.payload,
      }
    case NEWS_PAGINATION: {
      return {
        ...state,
        isLoadingNews: true,
      };
    }
    case NEWS_PAGINATION_FAILURE: {
      return {
        ...state,
        isLoadingNews: false,
      }
    }
    case NEWS_PAGINATION_SUCCESS:
      return {
        ...state,
        newsPage: action.payload.newsPage,
        isLoadingNews: false,
        news: [...state.news, ...action.payload.news],
      }
    case UPDATE_PAGINATION: {
      return {
        ...state,
        isLoadingUpdates: true,
      };
    }
    case UPDATE_PAGINATION_FAILURE: {
      return {
        ...state,
        isLoadingUpdates: false,
      }
    }
    case UPDATE_PAGINATION_SUCCESS:
      return {
        ...state,
        updatePage: action.payload.updatePage,
        isLoadingUpdates: false,
        updates: [...state.updates, ...action.payload.updates],
      }
    case EVENTS_PAGINATION: {
      return {
        ...state,
        isLoadingEvents: true,
      };
    }
    case EVENTS_PAGINATION_FAILURE: {
      return {
        ...state,
        isLoadingEvents: false,
      }
    }
    case EVENTS_PAGINATION_SUCCESS:
      return {
        ...state,
        eventPage: action.payload.eventPage,
        isLoadingEvents: false,
        events: [...state.events, ...action.payload.events],
      }
    default:
      return state;
  }
}
