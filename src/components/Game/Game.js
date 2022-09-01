import { useState } from 'react';
import Board from "../Board/Board";
import WinnerDiv from "../WinnerDiv/WinnerDiv";
import calculateWinner from '../../WinnerFunction/WinnerFunction';
import './Game.css'

const Game = () => {
    const [board, setBoard] = useState([null, null, null, null, null, null, null, null, null]);
    const [Xturn, setXturn] = useState(true);
    let winner = calculateWinner(board);

    const resetHandler = () => {
        setBoard([null, null, null, null, null, null, null, null, null]);
    }

    const clickHandler = (i) => {
        const boardCopy = [...board];

        if (winner || board[i]) return;

        boardCopy[i] = Xturn ? 'X' : 'O';
        setBoard(boardCopy);
        setXturn(!Xturn);
    }

    if (!winner && !board.includes(null)) {
        winner = 'Draw';
    }

    return (
        <>
            <Board board={board} onclick={clickHandler} />
            <WinnerDiv winnerState={winner} />
            {winner ? <button className='resetButton' onClick={resetHandler}>Start Again</button> : null}
        </>
    );
}

export default Game;