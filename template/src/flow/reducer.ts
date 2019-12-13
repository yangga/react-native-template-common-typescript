import * as types from "./types";

export class State {
  list: Array<any>;
}

export interface ReducerAction {
  type: string;
  data: any;
}

// the state at the beginning
const initialState = new State();

// add codes here for changing state
const reducer = (state = initialState, action: ReducerAction) => {
  switch (action.type) {
    case types.SET_DATA:
      {
        const {
          data: { list }
        } = action;

        return {
          ...state,
          list
        };
      }
      break;
    default:
      throw new Error("Unexpected action");
  }
};

export { initialState, reducer };
