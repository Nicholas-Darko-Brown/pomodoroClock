import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../actions";

const StartStop = () => {
  const isRunning = useSelector((state) => state.isRunning);
  const dispatch = useDispatch();

  const play = (
    <i className="fas fa-play"></i>
  );
  const stop = (
    <i className="fas fa-pause"></i>
  );

  return (
    <button
      className="button"
      id="start_stop"
      onClick={() => dispatch(toggle())}
    >
      {isRunning ? stop : play}
    </button>
  );
};

export default StartStop;
