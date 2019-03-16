import {
  departmentsGetApi,
  getBuildingDorms
} from '../api';

import {
  DEPARTMENTS_SUCCESS,
  DEPARTMENTS_PENDING,
  DEPARTMENTS_FAILURE,
  GET_BUILDING_DORMS_SUCCESS,
} from '../constants';

export const getDepartments = (searchedText) => async dispatch => {
  dispatch({
    type: DEPARTMENTS_PENDING
  });
  try {
    const response = await departmentsGetApi(searchedText);
    if (response && response.data) {
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

export const getBuildings = () => async dispatch => {
  try {    
    const {data} = await getBuildingDorms();
    data && dispatch({
      type: GET_BUILDING_DORMS_SUCCESS,
      payload: data,
    })
  } catch(e) {
    console.log(e)
  }
}