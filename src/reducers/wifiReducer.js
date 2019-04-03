import initialState from '../store/initialState';
import * as constants from '../constants';

export default (state = initialState.wifi, action) => {    
    switch (action.type) {
        case constants.GET_WIFI_SUCCESS:
            return {
                ...state,
                isLoadingWifi: false,
                dataWifi: action.payload,
            }
        case constants.GET_WIFI_FAILURE:
            return {
                ...state,
                isLoadingWifi: false,
            }
        case constants.GET_WIFI_PENDING:
            return {
                ...state,
                isLoadingWifi: true,
            }
        default: return state;
    }
}