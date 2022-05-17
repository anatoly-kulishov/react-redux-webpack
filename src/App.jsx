import React from 'react';

import { Counter } from "./components/Counter/Counter";
import { SITE_TITLE } from "./constants/common";
import "./App.scss";

export const App = () => {
  return (
    <div className="AppWrapper">
      <h1 className="AppTitle">{SITE_TITLE}</h1>
      <Counter/>
    </div>
  )
}