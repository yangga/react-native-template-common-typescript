import React from "react";
import AppNavigator from "navigator/AppNavigator";

import { Provider } from "flow";

export default function App() {
  return (
    <>
      <Provider>
        <AppNavigator />
      </Provider>
    </>
  );
}
