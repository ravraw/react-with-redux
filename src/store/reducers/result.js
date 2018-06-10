import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  results: []
};

const updatedResults = (state, action) => {
  const updatedResults = state.results.filter(
    result => result.id !== action.resultElId
  );
  return updateObject(state, { results: updatedResults });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return updateObject(state, {
        results: state.results.concat({ id: new Date(), value: action.result })
      });
    // return {
    //   ...state,
    //   results: state.results.concat({ id: new Date(), value: action.result })
    // };
    case actionTypes.DELETE_RESULT:
      updatedResults(state, action);

    // const updatedResults = state.results.filter(
    //   result => result.id !== action.resultElId
    // );
    // return updateObject(state, { results: updatedResults });

    // return {
    //   ...state,
    //   results: updatedResults
    // };
    default:
      return state;
  }
};

export default reducer;
