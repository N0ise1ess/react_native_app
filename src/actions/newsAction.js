import {
  newsApi,
  getNews,
  getAdvertisement,
  getEvents,
} from '../api';
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

export const getNewsPagination = (page) => async dispatch => {
  console.log('page', page)
  dispatch({
    type: NEWS_PAGINATION,
  });
  try {
    const response = await getNews(page);
    if (response && response.data) {
      if(response.status == '200'){
        dispatch({
          type: NEWS_PAGINATION_SUCCESS,
          payload: {
            newsPage: page,
            news: response.data,
          },
        });
      }
      else{
        dispatch({
          type: NEWS_PAGINATION_FAILURE,
          payload: response
        })
      }
    }
  } catch (err) {
    console.log(err);
    dispatch({
      type: NEWS_PAGINATION_FAILURE,
      payload: err,
      error: true
    });
  }
}

export const getUpdatesPagination = (page) => async dispatch => {
  console.log('page', page)
  dispatch({
    type: UPDATE_PAGINATION,
  });
  try {
    const response = await getAdvertisement(page);
    console.log(response)
    if (response && response.data) {
      if(response.status == '200'){
        dispatch({
          type: UPDATE_PAGINATION_SUCCESS,
          payload: {
            newsPage: page,
            news: response.data,
          },
        });
      }
      else{
        dispatch({
          type: UPDATE_PAGINATION_FAILURE,
          payload: response
        })
      }
    }
  } catch (err) {
    console.log(err);
    dispatch({
      type: UPDATE_PAGINATION_FAILURE,
      payload: err,
      error: true
    });
  }
}

export const getEventsPagination = (page) => async dispatch => {
  console.log('page', page)
  dispatch({
    type: EVENTS_PAGINATION,
  });
  try {
    const response = await getEvents(page);
    if (response && response.data) {
      if(response.status == '200'){
        dispatch({
          type: EVENTS_PAGINATION_SUCCESS,
          payload: {
            newsPage: page,
            news: response.data,
          },
        });
      }
      else{
        dispatch({
          type: EVENTS_PAGINATION_FAILURE,
          payload: response
        })
      }
    }
  } catch (err) {
    console.log(err);
    dispatch({
      type: EVENTS_PAGINATION_FAILURE,
      payload: err,
      error: true
    });
  }
}

export const getAllNews = () => async dispatch => {
  dispatch({
    type: NEWS_PENDING
  });
  try {
    const response = await newsApi();
    if (response && response.data) {
      console.log(response);
      if(response.status == '200'){
        dispatch({
          type: NEWS_SUCCESS,
          payload: response.data
        });
      }
      else{
        dispatch({
          type: NEWS_FAILURE,
          payload: response
        })
      }
    }
  } catch (err) {
    console.log(err);
    dispatch({
      type: NEWS_FAILURE,
      payload: err,
      error: true
    });
  }
};
