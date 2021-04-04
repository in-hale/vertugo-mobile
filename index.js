import { registerRootComponent } from 'expo';
import React from "react";
import { Provider } from "react-redux";
import { enableScreens } from "react-native-screens";

import myStore from "./src/Store";
import Routes from "./src/navigation/routes";
import {PersistGate} from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

enableScreens();

const persistor = persistStore(myStore);

const Root = () => {
  return (
    <Provider store={myStore}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes/>
      </PersistGate>
    </Provider>
  );
};

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(Root);
