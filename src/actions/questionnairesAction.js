import * as api from '../api';
import * as constants from '../constants';

export const getAllQuestionnaires = token => async dispatch => {
	try {
		let { data } = await api.getAllQuestionnaires(token);
		data && dispatch({
				type: constants.GET_ALL_QUESTIONNAIRES_SUCCESS,
				payload: data,
			});
	} catch (e) {
		// dispatch({
		// 	type: constants.PHONE_EDIT_FAILURE,
		// 	payload: 'Произошла ошибка при сохранении данных',
		// });
	}
}