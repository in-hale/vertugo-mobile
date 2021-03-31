import { registerRootComponent } from 'expo';
import React from "react";
import { Provider } from "react-redux";

import myStore from "./src/Store";
import { Routes } from "./src/navigation/routes";

const Root = () => {
  return (
    <Provider store={myStore}>
      <Routes/>
    </Provider>
  );
}

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(Root);
