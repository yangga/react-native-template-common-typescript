import RBC from "redux-by-context";

import { initialState, reducer } from "./reducer";
import actionCreator from "./actions";

const { Context: Context, Provider: Provider, useConsumer: Consumer } = RBC({
  contextName: "ctx", // You can change the name of context
  actionCreator: actionCreator,
  reducer,
  initialState,
  traceState: false
});

export { Context, Provider, Consumer };
