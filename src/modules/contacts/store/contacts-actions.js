import { departmentsGetApi, getBuildingDorms } from '../../api';

import * as types from './contacts-action-types';

export const setOpenedIdItemDivisions = (payload) => ({
  types: types.SET_OPENED_ID,
  payload,
});

export const getDepartments = (searchedText) => async (dispatch) => {
  dispatch({
    types: types.DEPARTMENTS_PENDING,
  });
  try {
    const response = await departmentsGetApi(searchedText);
    if (response && response.data) {
      if (response.status == '200') {
        dispatch({
          types: types.DEPARTMENTS_SUCCESS,
          payload: response.data,
        });
      } else {
        dispatch({
          types: types.DEPARTMENTS_FAILURE,
          payload: response,
        });
      }
    }
  } catch (err) {
    console.log(err);
    dispatch({
      types: types.DEPARTMENTS_FAILURE,
      payload: err,
      error: true,
    });
  }
};

export const getBuildings = () => async (dispatch) => {
  try {
    const { data } = await getBuildingDorms();
    data &&
      dispatch({
        types: types.GET_BUILDING_DORMS_SUCCESS,
        payload: data,
      });
  } catch (e) {
    console.log(e);
  }
};
