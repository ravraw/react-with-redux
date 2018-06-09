export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ADD = "ADD";
export const SUBSTRACT = "SUBSTRACT";
export const STORE_RESULT = "STORE_RESULT";
export const DELETE_RESULT = "DELETE_RESULT";

export const increment = () => {
  return {
    type: INCREMENT
  };
};

export const decrement = () => {
  return {
    type: DECREMENT
  };
};

export const add = val => {
  return {
    type: ADD,
    payload: {
      value: val
    }
  };
};
export const substract = val => {
  return {
    type: SUBSTRACT,
    payload: {
      value: val
    }
  };
};
export const storeResult = res => {
  return {
    type: STORE_RESULT,
    result: res
  };
};
export const deleteResult = resElId => {
  return {
    type: DELETE_RESULT,
    resultElID: resElId
  };
};
