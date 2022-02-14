import { useState } from "react";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
import { GameBox } from "./GameBox";

// loop -> map
//  Parent component -> child component (Data has to be passed) -> props
export function TicTacToe() {
  const [board, setBoard] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  // useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const decideWinner = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    // if winning condition present in board then we have a winner
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      // console.log(a, b, c);
      if (board[a] !== null && board[a] === board[b] && board[b] === board[c]) {
        console.log("Winner is", board[a]);
        return board[a];
      }
    }
    return null;
  };

  const winner = decideWinner(board);

  const [isXturn, setIsXTurn] = useState(true);

  const handleClick = (index) => {
    // copy the board and replace with 'X' in the clicked GameBox
    // Update only untouched boxes & until no winner
    if (winner === null && board[index] === null) {
      const boardCopy = [...board];
      console.log(boardCopy, index);
      boardCopy[index] = isXturn ? "X" : "O";
      setBoard(boardCopy);
      setIsXTurn(!isXturn);
    }

    // console.log(index);
  };

  const { width, height } = useWindowSize();

  return (
    <div className="full-game">
      {winner ? <Confetti width={width} height={height} gravity={0.01} /> : ""}
      <div className="board">
        {board.map((val, index) => (
          <GameBox val={val} onPlayerClick={() => handleClick(index)} />
        ))}
      </div>
      {winner ? <h2>Winner is: {winner}</h2> : ""}
      <button
        onClick={() => {
          setBoard([null, null, null, null, null, null, null, null, null]);
          setIsXTurn(true);
        }}
      >
        Restart
      </button>
    </div>
  );
}
// Flow of Class
// Total 2hr 30mins session = 2hours topic & 30mins doubt clarification on today's topic
// First 10mins previous class doubts
