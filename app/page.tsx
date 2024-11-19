"use client";
import { useEffect, useState } from "react";
import Cell from "./Components/Cell";

const comboWinning = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

function Home() {
  const [cells, setCells] = useState(["", "", "", "", "" , "", "", "", ""]);
  const [go, setGo] = useState("circle");
  const [winningMes, setWinningMes] = useState ("")

  useEffect(() => {
  comboWinning.forEach((combo) => {
    const circleWin = combo.every((cell) => cells[cell] === "circle");
    const crossWin = combo.every((cell) => cells[cell] === "cross");
    if (circleWin) {
      setWinningMes("Circle Wins")
    }else if (crossWin){
      setWinningMes("Cross Wins")
    }
  })
},[cells, winningMes]);

useEffect(() => {
  if(cells.every((cell) => cell !== "") && !winningMes) {
    setWinningMes("Draw!");
  }
},[cells, winningMes])
  

  return (
    <div className="container">
      <h2>Tic Tac Toe</h2>
      <div className="square-board">
          {cells.map((cell, index) => (
            <Cell 
                  id={index}
                  key={index} 
                  go={go} 
                  setGo={setGo} 
                  cells={cells} 
                  setCells={setCells} 
                  cell ={cell}
                  winningMes= {winningMes}
                  />
          ))}
      </div>
      <div>{winningMes}</div>
      {!winningMes && <div style={{fontSize: '20px'}}>{`It's now ${go} turn!`}</div>}
    </div>
  );
}
export default Home;