import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeColor } from "../features/colorSlice";

function RandomColor() {
  const colors = useSelector((state) => state.colors);
  const dispatch = useDispatch();

  return (
    <div className="random-color">
      <h2>Random Color</h2>
      <button onClick={() => dispatch(changeColor())}>
        Change Background Color
      </button>
      <div>Current Color: {colors.currentColor}</div>
      <div>Color History: {colors.colorHistory.join(", ")}</div>
    </div>
  );
}

export default RandomColor;
