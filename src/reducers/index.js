import { combineReducers } from "redux";

import authentication from "../features/authentication/reducers/authentication.reducer";
import map from "../features/map/reducers/map.reducer";

export default combineReducers({
  authentication,
  map
});
