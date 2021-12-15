const timer = (state = 1500, action) => {
  switch (action.type) {
    case "SET_TIME":
      return action.payload;
    case "DECREMENT_TIME":
      return state - 1;
    case "RESET":
      return 1500;
    default:
      return state;
  }
};

export default timer;
