import * as api from '../api';
import * as constants from '../constants';

export const resetQuestionnaires = () => ({
	type: constants.GET_QUESTIONNAIRES_SUCCESS,
	payload: {},
})

export const getAllQuestionnaires = token => async dispatch => {
	try {
		let { data } = await api.getAllQuestionnaires(token);
		data && dispatch({
			type: constants.GET_ALL_QUESTIONNAIRES_SUCCESS,
			payload: data,
		});
	} catch (e) {
	}
}

export const getQuestionnaires = (id, token) => async dispatch => {
	try {
		let { data } = await api.getQuestionnaire(id, token);
		data && dispatch({
			type: constants.GET_QUESTIONNAIRES_SUCCESS,
			payload: data,
		});
	} catch (e) {
		console.log(e)
	}
}

export const saveAnswers = (parametrs, token) => async dispatch => {
	try {
		let { data } = await api.saveAnswers(parametrs, token);
		data && dispatch({
			type: constants.SAVE_QUESTIONNAIRES_SUCCESS,
			payload: data,
		});
		getAllQuestionnaires(token)(dispatch);
	} catch (e) {
		console.log(e)
	}
}