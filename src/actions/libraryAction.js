import {
  libCardApi,
  libBookApi,
  libQRCodeApi,
  sendRequestLibraryApi,
} from '../api';

import * as constants from '../constants';

export const getLibraryCard = (token) => async dispatch => {
  dispatch({
    type: constants.LIBRARY_CARD_PENDING
  });
  try {
    const response = await libCardApi(token);
    if (response && response.data) {
      console.log(response);
      if (response.status == '200') {
        dispatch({
          type: constants.LIBRARY_CARD_SUCCESS,
          payload: response.data
        });
      }
      else {
        dispatch({
          type: constants.LIBRARY_CARD_FAILURE,
          payload: response
        })
      }
    }
  } catch (err) {
    console.log(err);
    dispatch({
      type: constants.LIBRARY_CARD_FAILURE,
      payload: err,
      error: true
    });
  }
};

export const getLibraryQRCode = (token) => async dispatch => {
  dispatch({
    type: constants.LIBRARY_QRCODE_PENDING
  });
  try {
    const response = await libQRCodeApi(token);
    if (response && response.data) {
      console.log(response);
      if (response.status == '200') {
        dispatch({
          type: constants.LIBRARY_QRCODE_SUCCESS,
          payload: response.data
        });
      }
      else {
        dispatch({
          type: constants.LIBRARY_QRCODE_FAILURE,
          payload: response
        })
      }
    }
  } catch (err) {
    console.log(err);
    dispatch({
      type: constants.LIBRARY_QRCODE_FAILURE,
      payload: err,
      error: true
    });
  }
};

export const getLibraryBook = (token) => async dispatch => {
  dispatch({
    type: constants.LIBRARY_BOOK_PENDING
  });
  try {
    const response = await libBookApi(token);
    if (response && response.data) {
      console.log(response);
      if (response.status == '200') {
        dispatch({
          type: constants.LIBRARY_BOOK_SUCCESS,
          payload: response.data
        });
      }
      else {
        dispatch({
          type: constants.LIBRARY_BOOK_FAILURE,
          payload: response
        })
      }
    }
  } catch (err) {
    console.log(err);
    dispatch({
      type: constants.LIBRARY_BOOK_FAILURE,
      payload: err,
      error: true
    });
  }
};

export const setRequestLibrary = (payload) => ({
  type: constants.SET_REQUEST_LIBRARY,
  payload,
})

export const sendRequestLibrary = (payload) => async (dispatch) => {
  dispatch({ type: constants.SET_REQUEST_LIBRARY_PENDING });
  try {
    const response = await sendRequestLibraryApi(payload);
    console.log(response);
    if (response.status == '200') {
      dispatch({
        type: constants.SET_REQUEST_LIBRARY_SUCCESS,
        payload: response.data
      });
    }
    else {
      dispatch({
        type: constants.SET_REQUEST_LIBRARY_FAILURE,
        payload: response
      })
    }
  } catch (err) {
    dispatch({
      type: constants.SET_REQUEST_LIBRARY_FAILURE,
      payload: err,
      error: true
    });
  }
}