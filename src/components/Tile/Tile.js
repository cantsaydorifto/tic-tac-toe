import './Tile.css'

const Tile = (props)=>{
    return <div onClick={()=>props.onclick(props.index)} className="tile">{props.val}</div>
}

export default Tile;