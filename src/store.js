import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'remote-redux-devtools';
import { createLogger } from "redux-logger";
import rootReducer from "./reducers";

let logger = createLogger({
    timestamps: true,
    duration: true
});

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);
