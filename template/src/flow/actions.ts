import { State, ReducerAction } from "./reducer";
import * as types from "./types";

export default (state: State, dispatch: React.Dispatch<ReducerAction>) => ({
  // sample code
  fetch: async (param?: any) => {
    try {
      // do something...

      return dispatch({
        type: types.SET_DATA,
        data: {
          list: [1, 2, 3, 4, 5]
        }
      });
    } catch (e) {
      console.error(e);
    }
  }
});
