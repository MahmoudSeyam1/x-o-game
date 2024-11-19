/* eslint-disable prefer-const */
import React, { Dispatch, SetStateAction } from 'react'


type cellProps = {
    id: number;
    go: string;
    setGo: Dispatch<SetStateAction<string>>;
    cells: string[];
    setCells: Dispatch<SetStateAction<string[]>>;
    cell: string;
    winningMes: string;
}
const Cell = ({go, setGo, id, cells,  setCells, cell, winningMes}: cellProps) => {


    const handelClick = () => {
        const notTaken = !cells[id];
        if (winningMes) {
            return
        }
            if (notTaken) {
                if (go === "circle") {
                    handelChange("circle");
                    setGo("cross");
                }else if (go === "cross") {
                    handelChange("cross");
                    setGo("circle");
                };
            };
        };

        const handelChange = (cellToChange: string) => {
            const copyCells = [...cells];
            copyCells[id] = cellToChange;
            setCells(copyCells);
        }



    return (
    <div className='square' onClick={handelClick}>
        <div className={cell}>{cell ? (cell === "circle" ? "o" : "x" ) : ""}</div>
        </div>
    );
}

export default Cell
