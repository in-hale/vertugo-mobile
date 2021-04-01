import { combineReducers } from "redux";

import authentication from "../features/authentication/reducers/authentication.reducer";

export default combineReducers({
  authentication,
});
