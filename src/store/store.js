import { combineReducers, createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import { stateSearchReducer } from '../component/foodSearch/reducers/searchReducer';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    stateSearch: stateSearchReducer 
});

export const store = createStore(rootReducer,   {},  composeEnhancers(applyMiddleware(thunk)));
