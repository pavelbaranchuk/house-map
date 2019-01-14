import { createStore, applyMiddleware, combineReducers } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

import templatesReducer from "./reducers/templates";
import housesReducer from "./reducers/houses";

const logger = createLogger({
  collapsed: true
});

const appReducer = combineReducers({
  templates: templatesReducer,
  houses: housesReducer
});

export function configureStore() {
  return createStore(appReducer, applyMiddleware(thunk, logger));
}
