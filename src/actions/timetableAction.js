import {
  timeTableGetApi
} from '../api';

import {
  SEARCH_SUCCESS,
  SEARCH_PENDING,
  SEARCH_FAILURE,
} from '../constants';

export const getSearchedTimetable = (searchedText, token) => async dispatch => {
  dispatch({
    type: SEARCH_PENDING
  });
  try {
    const response = await timeTableGetApi(searchedText, token);
    if (response && response.data) {
      console.log(response);
      if(response.status == '200'){
        dispatch({
          type: SEARCH_SUCCESS,
          payload: response.data
        });
      }
      else{
        dispatch({
          type: SEARCH_FAILURE,
          payload: response
        })
      }
    }
  } catch (err) {
    console.log(err);
    dispatch({
      type: SEARCH_FAILURE,
      payload: err,
      error: true
    });
  }
};
