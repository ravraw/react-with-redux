import * as actionTypes from "../actions/actions";

const initialState = {
  counter: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      };
    // break;
    case actionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      };
    // break;
    case actionTypes.ADD:
      return {
        ...state,
        counter: state.counter + action.payload.value
      };
    // break;
    case actionTypes.SUBSTRACT:
      return {
        ...state,
        counter: state.counter - action.payload.value
      };
    //break;
    default:
      return state;
  }
};

export default reducer;
