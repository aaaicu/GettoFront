import './Body.css';
import GameBoard from "../component/lotto/GameBoard";
import HistoryBoard from "../component/lotto/HistoryBoard";

function Body() {
  return (
    <div className="Body">
    <GameBoard />
    <HistoryBoard />
    </div>
  );
}

export default Body;
