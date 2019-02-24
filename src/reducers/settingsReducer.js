import {SET_FONT_SIZE} from '../constants';
import {AsyncStorage} from 'react-native';

const initialState = ({
    fontSize: 0,
})

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_FONT_SIZE: {
            AsyncStorage.setItem('fontSize', action.payload) 
            return {
                ...state,
                fontSize: action.payload,
            }
        }
        default: return state;
    }
}