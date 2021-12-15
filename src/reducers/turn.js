const turn = (state = "SESSION", action) => {
  switch (action.type) {
    case "SESSION":
      return "SESSION";
    case "BREAK":
      return "BREAK";
    case "RESET":
      return "SESSION";
    default:
      return state;
  }
};

export default turn;
