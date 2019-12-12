import types from "./types";

export default (state, dispatch) => ({
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
