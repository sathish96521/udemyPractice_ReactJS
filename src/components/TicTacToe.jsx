import GameBoard from "./GameBoard";
import Player from "./player";

export default function TicTacToe() {
  return (
    <main className="tictac">
      <h1>React Tic-Tac-Toe</h1>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Player 1" symbol="X" />
          <Player initialName="Player 2" symbol="O" />
        </ol>
        <GameBoard />
      </div>
    </main>
  );
}
