import React from "react";
import { decrementBreak, incrementBreak } from "../actions";
import { useSelector, useDispatch } from "react-redux";

const BreakController = () => {
  const breakTime = useSelector((state) => state.breakTime);
  const isRunning = useSelector((state) => state.isRunning);
  const dispatch = useDispatch();

  // Securing that break won't be less than 1 and bigger than 60
  // and that you can't change it when timer is running
  const change = (type) => {
    if (type === "INCREMENT" && breakTime < 60 && !isRunning) {
      dispatch(incrementBreak());
    } else if (type === "DECREMENT" && breakTime > 1 && !isRunning) {
      dispatch(decrementBreak());
    }
  };

  return (
    <div className="controller__card">
      <div className="controller__title" id="break-label">
        Break Length
      </div>
      <div className="controller__buttons">
        <button
          className="button"
          id="break-decrement"
          onClick={() => change("DECREMENT")}
        >
          <i className="fas fa-arrow-down"></i>
        </button>
        <div id="break-length">{breakTime}</div>
        <button
          className="button"
          id="break-increment"
          onClick={() => change("INCREMENT")}
        >
          <i className="fas fa-arrow-up"></i>
        </button>
      </div>
    </div>
  );
};

export default BreakController;
