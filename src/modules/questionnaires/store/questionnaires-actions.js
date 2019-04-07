import * as api from '../../api';
import * as types from './questionnaires-action-types';

export const resetQuestionnaires = () => ({
  type: types.GET_QUESTIONNAIRES_SUCCESS,
  payload: {},
});

export const getAllQuestionnaires = (token) => async (dispatch) => {
  try {
    let { data } = await api.getAllQuestionnaires(token);
    data &&
      dispatch({
        type: types.GET_ALL_QUESTIONNAIRES_SUCCESS,
        payload: data,
      });
  } catch (e) {}
};

export const getQuestionnaires = (id, token) => async (dispatch) => {
  try {
    let { data } = await api.getQuestionnaire(id, token);
    data &&
      dispatch({
        type: types.GET_QUESTIONNAIRES_SUCCESS,
        payload: data,
      });
  } catch (e) {
    console.log(e);
  }
};

export const saveAnswers = (parametrs, token) => async (dispatch) => {
  try {
    let { data } = await api.saveAnswers(parametrs, token);
    data &&
      dispatch({
        type: types.SAVE_QUESTIONNAIRES_SUCCESS,
        payload: data,
      });
    getAllQuestionnaires(token)(dispatch);
  } catch (e) {
    console.log(e);
  }
};
