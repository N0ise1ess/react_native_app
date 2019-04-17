import { initialState } from './reports-initial-state';
import * as types from './reports-action-types';

export const questionnairesReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.GET_REPORTS_OF_YEARS_PENDING:
			return {
				...state,
				isLoadingYears: false,
				yearsReport: action.payload,
			}
		case types.GET_YEARS_OF_REPORTS_SUCCESS:
			return {
				...state,
				isLoadingReport: false,
				report: action.payload,
			}
		case types.GET_REPORTS_OF_YEARS_PENDING:
			return {
				...state,
				isLoadingYears: true,
			}
		case types.GET_YEARS_OF_REPORTS_PENDING:
			return {
				...state,
				isLoadingReport: true,
			}
		default:
			return { ...state };
	}
};
