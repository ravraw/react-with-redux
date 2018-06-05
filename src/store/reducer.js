const initialState = {
  counter: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + 1
      };
      break;
    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - 1
      };
      break;
    case "ADD5":
      return {
        ...state,
        counter: state.counter + 5
      };
      break;
    case "SUBSTRACT5":
      return {
        ...state,
        counter: state.counter - 5
      };
      break;
  }
  return state;
};

export default reducer;
