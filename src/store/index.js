import { createStore, applyMiddleware, combineReducers } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

import templatesReducer from "./reducers/templates";

const logger = createLogger({
  collapsed: true
});

const appReducer = combineReducers({
  templates: templatesReducer
});

export function configureStore() {
  return createStore(appReducer, applyMiddleware(thunk, logger));
}
