import {
  departmentsGetApi
} from '../api';

import {
  DEPARTMENTS_SUCCESS,
  DEPARTMENTS_PENDING,
  DEPARTMENTS_FAILURE,
} from '../constants';

export const getDepartments = (searchedText) => async dispatch => {
  dispatch({
    type: DEPARTMENTS_PENDING
  });
  try {
    const response = await departmentsGetApi(searchedText);
    if (response && response.data) {
      console.log(response);
      if(response.status == '200'){
        dispatch({
          type: DEPARTMENTS_SUCCESS,
          payload: response.data
        });
      }
      else{
        dispatch({
          type: DEPARTMENTS_FAILURE,
          payload: response
        })
      }
    }
  } catch (err) {
    console.log(err);
    dispatch({
      type: DEPARTMENTS_FAILURE,
      payload: err,
      error: true
    });
  }
};
