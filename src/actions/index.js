export const decrementSession = () => ({ type: "DECREMENT_SESSION" });

export const incrementSession = () => ({ type: "INCREMENT_SESSION" });

export const decrementBreak = () => ({ type: "DECREMENT_BREAK" });

export const incrementBreak = () => ({ type: "INCREMENT_BREAK" });

export const toggle = () => ({ type: "TOGGLE" });

export const sessionTurn = () => ({ type: "SESSION" });

export const breakTurn = () => ({ type: "BREAK" });

export const reset = () => ({ type: "RESET" });

export const resetReset = () => ({ type: "RESET_RESET" });

export const setTime = (payload) => ({ type: "SET_TIME", payload });

export const decrementTime = () => ({ type: "DECREMENT_TIME" });
