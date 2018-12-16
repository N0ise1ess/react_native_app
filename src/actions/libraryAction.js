import {
  libCardApi,
  libBookApi
} from '../api';

import {
  LIBRARY_CARD_PENDING,
  LIBRARY_CARD_SUCCESS,
  LIBRARY_CARD_FAILURE,
  LIBRARY_BOOK_PENDING,
  LIBRARY_BOOK_SUCCESS,
  LIBRARY_BOOK_FAILURE,
} from '../constants';

export const getLibraryCard = (token) => async dispatch => {
  dispatch({
    type: LIBRARY_CARD_PENDING
  });
  try {
    const response = await libCardApi(token);
    if (response && response.data) {
      console.log(response);
      if(response.status == '200'){
        dispatch({
          type: LIBRARY_CARD_SUCCESS,
          payload: response.data
        });
      }
      else{
        dispatch({
          type: LIBRARY_CARD_FAILURE,
          payload: response
        })
      }
    }
  } catch (err) {
    console.log(err);
    dispatch({
      type: LIBRARY_CARD_FAILURE,
      payload: err,
      error: true
    });
  }
};

export const getLibraryBook = (token) => async dispatch => {
  dispatch({
    type: LIBRARY_BOOK_PENDING
  });
  try {
    const response = await libBookApi(token);
    if (response && response.data) {
      console.log(response);
      if(response.status == '200'){
        dispatch({
          type: LIBRARY_BOOK_SUCCESS,
          payload: response.data
        });
      }
      else{
        dispatch({
          type: LIBRARY_BOOK_FAILURE,
          payload: response
        })
      }
    }
  } catch (err) {
    console.log(err);
    dispatch({
      type: LIBRARY_BOOK_FAILURE,
      payload: err,
      error: true
    });
  }
};
