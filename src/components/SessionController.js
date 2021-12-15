import React from "react";
import { decrementSession, incrementSession } from "../actions";
import { useSelector, useDispatch } from "react-redux";

const SessionController = () => {
  const sessionTime = useSelector((state) => state.sessionTime);
  const isRunning = useSelector((state) => state.isRunning);
  const dispatch = useDispatch();

  // Securing that session won't be less than 1 and bigger than 60
  // and that you can't change it when timer is running
  const change = (type) => {
    if (type === "INCREMENT" && sessionTime < 60 && !isRunning) {
      dispatch(incrementSession());
    } else if (type === "DECREMENT" && sessionTime > 1 && !isRunning) {
      dispatch(decrementSession());
    }
  };

  return (
    <div className="controller__card">
      <div className="controller__title" id="session-label">
        Session Length
      </div>
      <div className="controller__buttons">
        <button
          className="button"
          id="session-decrement"
          onClick={() => change("DECREMENT")}
        >
          <i className="fas fa-arrow-down">
            <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
          </i>
        </button>
        <div id="session-length">{sessionTime}</div>
        <button
          className="button"
          id="session-increment"
          onClick={() => change("INCREMENT")}
        >
          <i className="fas fa-arrow-up"></i>
        </button>
      </div>
    </div>
  );
};

export default SessionController;
