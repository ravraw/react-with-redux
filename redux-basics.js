const redux = require("redux");
const createStore = redux.createStore;

const initalState = {
  counter: 0
};

// Reducer

const rootReducer = (state = initalState, action) => {
  switch (action.type) {
    case "INC_COUNTER":
      return {
        ...state,
        counter: state.counter + 1
      };
      break;
    case "ADD_COUNTER":
      return {
        ...state,
        counter: state.counter + action.payload.value
      };
      break;
  }
  return state;
};

//Store

const store = createStore(rootReducer);
console.log(store.getState());

// Subscription

store.subscribe(() => {
  console.log("[Subscription]", store.getState());
});

// Action dispatcher

store.dispatch({ type: "INC_COUNTER" });
store.dispatch({
  type: "ADD_COUNTER",
  payload: {
    value: 5
  }
});

store.dispatch({
  type: "ADD_COUNTER",
  payload: {
    value: 10
  }
});
