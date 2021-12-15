import isRunning from "./isRunning";
import breakTime from "./breakTime";
import sessionTime from "./sessionTime";
import turn from "./turn";
import timer from "./timer";
import didReset from "./didReset";
import { combineReducers } from "redux";

export default combineReducers({
  breakTime,
  sessionTime,
  isRunning,
  turn,
  timer,
  didReset,
});
