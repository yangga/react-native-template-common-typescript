import { DefaultReducerAction } from "redux-by-context";
import * as types from "./types";

export class State {
  list: Array<number> = [];
}

// the state at the beginning
const initialState = new State();

// add codes here for changing state
const reducer = (prevState = initialState, action: DefaultReducerAction) => {
  switch (action.type) {
    case types.SET_DATA:
      const {
        data: { list }
      } = action;

      return {
        ...prevState,
        list
      };
    default:
      throw new Error("Unexpected action");
  }
};

export { initialState, reducer };
