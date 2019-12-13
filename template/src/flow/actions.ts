import { DefaultDispatch } from "redux-by-context";
import { State } from "./reducer";
import * as types from "./types";

export function actionCreator(state: State, dispatch: DefaultDispatch) {
  class ActionImpl {
    async fetch(param?: any) {
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
  }
  const ins = new ActionImpl();
  return ins;
}
