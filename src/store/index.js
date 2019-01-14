// import { createStore, applyMiddleware, combineReducers } from "redux";
// import { createLogger } from "redux-logger";
// import thunk from "redux-thunk";

// import templatesReducer from "./reducers/templates";

// const logger = createLogger({
//     collapsed: true
// });

// const appReducer = combineReducers({
//     templates: templatesReducer,
// });

// const rootReducer = (state, action) => {
//     return appReducer(state, action);
// };

// export function configureStore() {
//     return createStore(rootReducer, applyMiddleware(thunk, logger));
// }
