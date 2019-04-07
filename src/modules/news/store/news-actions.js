import { newsApi, getNews, getAdvertisement, getEvents } from '../../api';
import * as types from './news-action-types';

export const getNewsPagination = (page) => async (dispatch) => {
  console.log('page', page);
  dispatch({
    type: types.NEWS_PAGINATION,
  });
  try {
    const response = await getNews(page);
    if (response)
      dispatch({
        type: types.NEWS_PAGINATION_SUCCESS,
        payload: {
          newsPage: page,
          news: response,
        },
      });
    else
      dispatch({
        type: types.NEWS_PAGINATION_FAILURE,
        payload: response,
      });
  } catch (err) {
    console.log(err);
    dispatch({
      type: types.NEWS_PAGINATION_FAILURE,
      payload: err,
      error: true,
    });
  }
};

export const getUpdatesPagination = (page) => async (dispatch) => {
  console.log('page', page);
  dispatch({
    type: types.UPDATE_PAGINATION,
  });
  try {
    const response = await getAdvertisement(page);
    console.log(response);
    if (response && response.data) {
      if (response.status == '200') {
        dispatch({
          type: types.UPDATE_PAGINATION_SUCCESS,
          payload: {
            newsPage: page,
            news: response.data,
          },
        });
      } else {
        dispatch({
          type: types.UPDATE_PAGINATION_FAILURE,
          payload: response,
        });
      }
    }
  } catch (err) {
    console.log(err);
    dispatch({
      type: types.UPDATE_PAGINATION_FAILURE,
      payload: err,
      error: true,
    });
  }
};

export const getEventsPagination = (page) => async (dispatch) => {
  console.log('page', page);
  dispatch({
    type: types.EVENTS_PAGINATION,
  });
  try {
    const response = await getEvents(page);
    if (response && response.data) {
      if (response.status == '200') {
        dispatch({
          type: types.EVENTS_PAGINATION_SUCCESS,
          payload: {
            newsPage: page,
            news: response.data,
          },
        });
      } else {
        dispatch({
          type: types.EVENTS_PAGINATION_FAILURE,
          payload: response,
        });
      }
    }
  } catch (err) {
    console.log(err);
    dispatch({
      type: types.EVENTS_PAGINATION_FAILURE,
      payload: err,
      error: true,
    });
  }
};

export const getAllNews = () => async (dispatch) => {
  dispatch({
    type: types.NEWS_PENDING,
  });
  try {
    const response = await newsApi();
    if (response && response.data) {
      console.log(response);
      if (response.status == '200') {
        dispatch({
          type: types.NEWS_SUCCESS,
          payload: response.data,
        });
      } else {
        dispatch({
          type: types.NEWS_FAILURE,
          payload: response,
        });
      }
    }
  } catch (err) {
    console.log(err);
    dispatch({
      type: types.NEWS_FAILURE,
      payload: err,
      error: true,
    });
  }
};
