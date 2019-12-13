import reduxInitialize from "redux-by-context";

import { actionCreator } from "./actions";
import { initialState, reducer } from "./reducer";

export const { Provider, useRedux } = reduxInitialize({
  actionCreator: actionCreator,
  reducer,
  initialState,
  traceState: false
});
