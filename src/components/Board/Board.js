import Tile from '../Tile/Tile';
import './Board.css';

const Board = (props) => {
    return (
        <div className="board">
            {props.board.map((el, i) => <Tile onclick={props.onclick} key={i} val={el} index={i} />)}
        </div>
    );
}

export default Board;