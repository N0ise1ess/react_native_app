import {
  timeTableSearchApi,
  timeTableGetApi
} from '../api';

import {
  SEARCH_SUCCESS,
  SEARCH_PENDING,
  SEARCH_FAILURE,
  TIMETABLE_GET_FAILURE,
  TIMETABLE_GET_SUCCESS,
  TIMETABLE_GET_PENDING
} from '../constants';

export const getSearchedTimetable = (searchedText, token) => async dispatch => {
  dispatch({
    type: SEARCH_PENDING
  });
  try {
    const response = await timeTableSearchApi(searchedText, token);
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

export const getTimetable = (search, token) => async dispatch => {
  dispatch({
    type: TIMETABLE_GET_PENDING
  });
  try {
    const response = await timeTableGetApi(search, token);
    if (response && response.data) {
      console.log(response);
      if(response.status == '200'){
        dispatch({
          type: TIMETABLE_GET_SUCCESS,
          payload: response.data
        });
      }
      else{
        dispatch({
          type: TIMETABLE_GET_FAILURE,
          payload: response
        })
      }
    }
  } catch (err) {
    console.log(err);
    dispatch({
      type: TIMETABLE_GET_FAILURE,
      payload: err,
      error: true
    });
  }
};
