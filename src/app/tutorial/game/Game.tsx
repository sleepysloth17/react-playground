"use client";
import { Dispatch, SetStateAction, useState } from "react";
import Board from "./board/Board";

export default function Game() {
  const [move, setMove]: [string, Dispatch<SetStateAction<string>>] =
    useState<string>("X");
  const [squares, setSquares]: [
    ReadonlyArray<string>,
    Dispatch<SetStateAction<ReadonlyArray<string>>>,
  ] = useState<ReadonlyArray<string>>(new Array(9).fill(""));

  function handleMove(squareIndex: number) {
    const newSquares: string[] = [...squares];
    newSquares[squareIndex] = move;
    setSquares(newSquares);
    setMove(move === "X" ? "O" : "X");
  }

  return (
    <>
      <Board squares={squares} onPlay={handleMove} />
    </>
  );
}
