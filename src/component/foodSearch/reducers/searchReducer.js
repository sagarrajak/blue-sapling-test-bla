import { SET_CURRENT_STATE, SET_CURRENT_CITY } from '../actions/foodSearchActions';

export function stateSearchReducer(state={currentState: '', currentCity: ''}, action) {
   
    switch(action.type) {
        case SET_CURRENT_STATE:
            console.log(state, action);
            return {
                ...state,
                currentState: action.payload,
            };
        case SET_CURRENT_CITY:
            console.log(state, action);
            return {
                ...state,
                currentCity: action.payload,
            }
        default:
            return state;
    }
} 
