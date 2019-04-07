import { newsApi, getNews, getAdvertisement, getEvents } from '../../api';
import * as actionTypes from './news-action-types';

export const getNewsPagination = (page) => async (dispatch) => {
  console.log('page', page);
  dispatch({
    type: actionTypes.NEWS_PAGINATION,
  });
  try {
    const response = await getNews(page);
    if (response)
      dispatch({
        type: actionTypes.NEWS_PAGINATION_SUCCESS,
        payload: {
          newsPage: page,
          news: response,
        },
      });
    else
      dispatch({
        type: actionTypes.NEWS_PAGINATION_FAILURE,
        payload: response,
      });
  } catch (err) {
    console.log(err);
    dispatch({
      type: actionTypes.NEWS_PAGINATION_FAILURE,
      payload: err,
      error: true,
    });
  }
};

export const getUpdatesPagination = (page) => async (dispatch) => {
  console.log('page', page);
  dispatch({
    type: actionTypes.UPDATE_PAGINATION,
  });
  try {
    const response = await getAdvertisement(page);
    console.log(response);
    if (response && response.data) {
      if (response.status == '200') {
        dispatch({
          type: actionTypes.UPDATE_PAGINATION_SUCCESS,
          payload: {
            newsPage: page,
            news: response.data,
          },
        });
      } else {
        dispatch({
          type: actionTypes.UPDATE_PAGINATION_FAILURE,
          payload: response,
        });
      }
    }
  } catch (err) {
    console.log(err);
    dispatch({
      type: actionTypes.UPDATE_PAGINATION_FAILURE,
      payload: err,
      error: true,
    });
  }
};

export const getEventsPagination = (page) => async (dispatch) => {
  console.log('page', page);
  dispatch({
    type: actionTypes.EVENTS_PAGINATION,
  });
  try {
    const response = await getEvents(page);
    if (response && response.data) {
      if (response.status == '200') {
        dispatch({
          type: actionTypes.EVENTS_PAGINATION_SUCCESS,
          payload: {
            newsPage: page,
            news: response.data,
          },
        });
      } else {
        dispatch({
          type: actionTypes.EVENTS_PAGINATION_FAILURE,
          payload: response,
        });
      }
    }
  } catch (err) {
    console.log(err);
    dispatch({
      type: actionTypes.EVENTS_PAGINATION_FAILURE,
      payload: err,
      error: true,
    });
  }
};

export const getAllNews = () => async (dispatch) => {
  dispatch({
    type: actionTypes.NEWS_PENDING,
  });
  try {
    const response = await newsApi();
    if (response && response.data) {
      console.log(response);
      if (response.status == '200') {
        dispatch({
          type: actionTypes.NEWS_SUCCESS,
          payload: response.data,
        });
      } else {
        dispatch({
          type: actionTypes.NEWS_FAILURE,
          payload: response,
        });
      }
    }
  } catch (err) {
    console.log(err);
    dispatch({
      type: actionTypes.NEWS_FAILURE,
      payload: err,
      error: true,
    });
  }
};
