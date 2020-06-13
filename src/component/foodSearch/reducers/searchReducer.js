import * as actions from '../actions/foodSearchActions';

export function stateSearchReducer(state={currentCity: ''}, action) {
    switch(state.action) {
        case actions.SET_CURRENT_CITY:
            return {
                currentCity: action.payload,
            };
        default:
            return state;
    }
} 
