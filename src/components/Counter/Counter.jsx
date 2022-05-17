import React from "react";
import { useSelector } from "react-redux";

import { getAppState } from "../../store/selector/appSelector";
import { useActions } from "../../store";
import "./Counter.scss";

export const Counter = () => {
  const {increaseCount, decreaseCount} = useActions();
  const {count} = useSelector(getAppState);

  const onIncreaseCountClick = () => increaseCount();
  const onDecreaseCountClick = () => decreaseCount();

  return (
    <div className="CounterWrapper">
      <h2>{count}</h2>
      <button onClick={onDecreaseCountClick}>-</button>
      <button onClick={onIncreaseCountClick}>+</button>
    </div>
  )
}