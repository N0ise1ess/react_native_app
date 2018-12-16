import initialState from '../store/initialState';
import {
  LIBRARY_CARD_PENDING,
  LIBRARY_CARD_SUCCESS,
  LIBRARY_CARD_FAILURE,
  LIBRARY_BOOK_PENDING,
  LIBRARY_BOOK_SUCCESS,
  LIBRARY_BOOK_FAILURE,
} from '../constants';

export default libraryReducer = (state= initialState.libraryReducer, action) => {
  switch (action.type) {
    case LIBRARY_CARD_SUCCESS:
      return {
        ...state,
        cardInfo: action.payload,
      }
    case LIBRARY_BOOK_SUCCESS:
      return {
        ...state,
        bookInfo: action.payload,
      }
    default:
      return state;
  }
}
