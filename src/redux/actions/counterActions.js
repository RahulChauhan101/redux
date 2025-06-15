export const increment = () => {
  return {
    type: "INCREMENT"
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT"
  };
};
  

export const multiply = (value) => {
  return {
    type: "MULTIPLY",
    payload: value
  };
};

export const division = (value) => {
  return {
    type: "DIVISION",
    payload: value
  };
};

export const setCount = (value) => {
  return {
    type: "SET_COUNT",
    payload: value,
  };
};