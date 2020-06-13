import { SET_CURRENT_CITY } from './foodSearchActions';

export const setCurrentCityAction = (payload) => {
    return {
        type: SET_CURRENT_CITY,
        payload,
    }
}