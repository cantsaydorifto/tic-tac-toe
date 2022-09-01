import './WinnerDiv.css'
const WinnerDiv = ({winnerState}) => {
    if(winnerState === 'Draw'){
        return <p className='result'>We Have A Draw</p>
    }

    return winnerState?<p className='result'>Winner is : <span className='winner'>{winnerState}</span></p>:null;
}

export default WinnerDiv;