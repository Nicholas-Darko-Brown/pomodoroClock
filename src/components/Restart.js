import React from "react";
import { useDispatch } from "react-redux";
import { reset } from "../actions";

const Restart = () => {
  const dispatch = useDispatch();
  return (
    <button 
      className="button" 
      id="reset" 
      onClick={() => dispatch(reset())}
      >
      <i class="fas fa-sync-alt"></i>
    </button>
  );
};

export default Restart;
