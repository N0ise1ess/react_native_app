import { libCardApi, libBookApi, libQRCodeApi, sendRequestLibraryApi } from '../../api';

import * as types from './library-action-types';

export const getLibraryCard = (token) => async (dispatch) => {
  dispatch({
    type: types.LIBRARY_CARD_PENDING,
  });
  try {
    const response = await libCardApi(token);
    if (response && response.data) {
      console.log(response);
      if (response.status == '200') {
        dispatch({
          type: types.LIBRARY_CARD_SUCCESS,
          payload: response.data,
        });
      } else {
        dispatch({
          type: types.LIBRARY_CARD_FAILURE,
          payload: response,
        });
      }
    }
  } catch (err) {
    console.log(err);
    dispatch({
      type: types.LIBRARY_CARD_FAILURE,
      payload: err,
      error: true,
    });
  }
};

export const getLibraryQRCode = (token) => async (dispatch) => {
  dispatch({
    type: types.LIBRARY_QRCODE_PENDING,
  });
  try {
    const response = await libQRCodeApi(token);
    if (response && response.data) {
      console.log(response);
      if (response.status == '200') {
        dispatch({
          type: types.LIBRARY_QRCODE_SUCCESS,
          payload: response.data,
        });
      } else {
        dispatch({
          type: types.LIBRARY_QRCODE_FAILURE,
          payload: response,
        });
      }
    }
  } catch (err) {
    console.log(err);
    dispatch({
      type: types.LIBRARY_QRCODE_FAILURE,
      payload: err,
      error: true,
    });
  }
};

export const getLibraryBook = (token) => async (dispatch) => {
  dispatch({
    type: types.LIBRARY_BOOK_PENDING,
  });
  try {
    const response = await libBookApi(token);
    if (response && response.data) {
      console.log(response);
      if (response.status == '200') {
        dispatch({
          type: types.LIBRARY_BOOK_SUCCESS,
          payload: response.data,
        });
      } else {
        dispatch({
          type: types.LIBRARY_BOOK_FAILURE,
          payload: response,
        });
      }
    }
  } catch (err) {
    console.log(err);
    dispatch({
      type: types.LIBRARY_BOOK_FAILURE,
      payload: err,
      error: true,
    });
  }
};

export const setRequestLibrary = (payload) => ({
  type: types.SET_REQUEST_LIBRARY,
  payload,
});

export const sendRequestLibrary = (payload) => async (dispatch) => {
  dispatch({ type: types.SET_REQUEST_LIBRARY_PENDING });
  try {
    const response = await sendRequestLibraryApi(payload);
    console.log(response);
    if (response.status == '200') {
      dispatch({
        type: types.SET_REQUEST_LIBRARY_SUCCESS,
        payload: response.data,
      });
    } else {
      dispatch({
        type: types.SET_REQUEST_LIBRARY_FAILURE,
        payload: response,
      });
    }
  } catch (err) {
    dispatch({
      type: types.SET_REQUEST_LIBRARY_FAILURE,
      payload: err,
      error: true,
    });
  }
};
