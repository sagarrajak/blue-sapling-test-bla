import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { stateSearchReducer } from "../component/foodSearch/reducers/searchReducer";
import { apiLocationIdSearch } from "../component/navbar/actions/restorentSearchAction";
import { apiMiddleware } from "./apiMiddleware";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  stateSearch: stateSearchReducer,
  [apiLocationIdSearch.uniqueKey]: apiLocationIdSearch.reducer,
});

export const store = createStore(
  rootReducer,
  {},
  composeEnhancers(applyMiddleware(apiMiddleware))
);
