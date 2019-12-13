import * as types from "./types";

// the state at the beginning
const initialState = {
  list: []
};

// add codes here for changing state
const reducer = (state = initialState, action: any) => {
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
