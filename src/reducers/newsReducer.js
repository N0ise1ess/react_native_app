import initialState from '../store/initialState';
import {
  NEWS_PENDING,
  NEWS_SUCCESS,
  NEWS_FAILURE,
  NEWS_PAGINATION_SUCCESS,
  NEWS_PAGINATION_FAILURE,
  NEWS_PAGINATION,
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
    default:
      return state;
  }
}
