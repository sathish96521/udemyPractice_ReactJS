import { useState } from "react";
import GameBoard from "./GameBoard";
import Player from "./player";
import Log from "./Log";

export default function TicTacToe() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState("X");

  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((curActivePlayer) => (curActivePlayer === 'X' ? 'O' : 'X'));
    setGameTurns((prevTurns) => {
         let currentPlayer = 'X';

         if( prevTurns.length > 0 && prevTurns[0].player === 'X' ) {
            currentPlayer = 'O';
         }
        const updatedTurns = [
            { square : { row: rowIndex, col: colIndex }, player: activePlayer },
            ...prevTurns,
        ];

        return updatedTurns;
    });
  }

  return (
    <main className="tictac">
      <h1>React Tic-Tac-Toe</h1>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X"  isActive={activePlayer === 'X'} />
          <Player initialName="Player 2" symbol="O"   isActive={activePlayer === 'O'}  />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}
