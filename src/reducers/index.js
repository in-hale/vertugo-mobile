import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage'

import authentication from "../features/authentication/reducers/authentication.reducer";
import map from "../features/map/reducers/map.reducer";

const rootReducer = combineReducers({
  authentication,
  map
})
const persistConfig = {
  key: 'authentication',
  storage: AsyncStorage,
  whitelist: ['authentication']
};

export default persistReducer(persistConfig, rootReducer);
