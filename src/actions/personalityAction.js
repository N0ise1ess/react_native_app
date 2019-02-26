import {
  getPersonalityByName
} from '../api';

import {
  PERSONALITY_SEARCHING_FAILURE,
  PERSONALITY_SEARCHING_PENDING,
  PERSONALITY_SEARCHING_SUCCESS,
} from '../constants';

export const findPersonalityByName = (searchedName) => async dispatch => {
  dispatch({
    type: PERSONALITY_SEARCHING_PENDING
  });
  try {
    const response = await getPersonalityByName(searchedName);
    if (response && response.data) {
      console.log(response);
      if(response.status == '200'){
        dispatch({
          type: PERSONALITY_SEARCHING_SUCCESS,
          payload: response.data
        });
      }
      else{
        dispatch({
          type: PERSONALITY_SEARCHING_FAILURE,
          payload: response
        })
      }
    }
  } catch (err) {
    console.log(err);
    dispatch({
      type: PERSONALITY_SEARCHING_FAILURE,
      payload: err,
      error: true
    });
  }
};
