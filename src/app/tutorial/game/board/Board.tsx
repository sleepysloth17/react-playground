"use client";
import "./Board.scss";
import Square from "./square/Square";

const LINES: ReadonlyArray<Readonly<[number, number, number]>> = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function checkForWinner(squares: ReadonlyArray<string>): string {
  for (const [a, b, c] of LINES) {
    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
      return squares[a];
    }
  }

  return "";
}

export default function Board({
  squares,
  onPlay,
}: {
  squares: ReadonlyArray<string>;
  onPlay: (index: number) => void;
}) {
  function handleClick(index: number) {
    if (!squares[index] && !checkForWinner(squares).length) {
      onPlay(index);
    }
  }

  return (
    <div className="board">
      {squares.map((_, index: number) => (
        <Square
          key={index}
          value={squares[index]}
          onSquareClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
}
