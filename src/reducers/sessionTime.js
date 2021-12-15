const sessionTime = (state = 25, action) => {
  switch (action.type) {
    case "INCREMENT_SESSION":
      return state + 1;
    case "DECREMENT_SESSION":
      return state - 1;
    case "RESET":
      return 25;
    default:
      return state;
  }
};

export default sessionTime;
