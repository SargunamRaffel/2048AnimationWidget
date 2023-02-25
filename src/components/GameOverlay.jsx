import React, {createElement,useCallback} from "react";
import TryAgainLogo from "../assets/img/try-again.gif";


const GameOverlay = ({ onRestart, board,buttonAction}) => {

  const commitScore=useCallback(()=>{
    console.log('Commit Score')
     buttonAction.execute();
  });
  if (board.hasWon()) {
    return <div className="tile2048"></div>;
  } else if (board.hasLost()) {
    return (
      <div className="gameOver" onClick={onRestart} onLoad={commitScore}>
        <img
          src={TryAgainLogo}
          alt="Inténtalo de nuevo!!"
          style={{
            width: "100%",
            height: "100%",
            cursor: "pointer",
          }}
        />
      </div>
    );
  }

  return null;
};

export default GameOverlay;