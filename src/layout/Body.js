import React from "react";
import './Body.css';
import GameBoard from "../component/lotto/GameBoard";
import HistoryBoard from "../component/lotto/HistoryBoard";

function Body() {
  return (
    <div className="Body">
    <GameBoard />
    <div>
      <HistoryBoard />
    </div>


    Body !
    ~
    </div>
  );
}

export default Body;
