import * as types from './library-action-types';
import { initialState } from './library-initial-state';

export const libraryReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LIBRARY_CARD_SUCCESS:
      return {
        ...state,
        cardInfo: action.payload,
      };
    case types.LIBRARY_BOOK_SUCCESS:
      return {
        ...state,
        bookInfo: action.payload,
      };
    case types.LIBRARY_QRCODE_SUCCESS:
      return {
        ...state,
        qrcodeData: action.payload,
      };
    case types.SET_REQUEST_LIBRARY:
      return {
        ...state,
        requestLibrary: action.payload,
      };
    case types.SET_REQUEST_LIBRARY_PENDING:
      return {
        ...state,
        isLoadingRequestLibrary: true,
      };
    case types.SET_REQUEST_LIBRARY_SUCCESS:
      return {
        ...state,
        requestNumber: action.payload,
        isLoadingRequestLibrary: false,
      };
    default:
      return state;
  }
};
