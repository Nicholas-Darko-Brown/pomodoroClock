const didReset = (state = false, action) => {
  switch (action.type) {
    case "RESET":
      return true;
    case "RESET_RESET":
      return false;
    default:
      return state;
  }
};

export default didReset;
