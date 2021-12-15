const breakTime = (state = 5, action) => {
  switch (action.type) {
    case "INCREMENT_BREAK":
      return state + 1;
    case "DECREMENT_BREAK":
      return state - 1;
    case "RESET":
      return 5;
    default:
      return state;
  }
};

export default breakTime;
