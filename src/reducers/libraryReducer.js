import initialState from '../store/initialState';
import * as constants from '../constants';

export default libraryReducer = (state= initialState.libraryReducer, action) => {
  switch (action.type) {
    case constants.LIBRARY_CARD_SUCCESS:
      return {
        ...state,
        cardInfo: action.payload,
      }
    case constants.LIBRARY_BOOK_SUCCESS:
      return {
        ...state,
        bookInfo: action.payload,
      }
    case constants.LIBRARY_QRCODE_SUCCESS:
      return {
        ...state,
        qrcodeData: action.payload,
      }
    case constants.SET_REQUEST_LIBRARY:
      return {
        ...state,
        requestLibrary: action.payload,
      }
    case constants.SET_REQUEST_LIBRARY_PENDING:
      return {
        ...state,
        isLoadingRequestLibrary: true,
      }
    case constants.SET_REQUEST_LIBRARY_SUCCESS:
      return {
        ...state,
        requestNumber: action.payload,
        isLoadingRequestLibrary: false,
      }
    default:
      return state;
  }
}
