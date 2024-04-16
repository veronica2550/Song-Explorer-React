import Song from "../Song";
import './index.css';

function SongList({data}){
    return (
        <div className="SongList">
        {data.map((song)=>{
            return <Song key={song.no} {...song}/>}
        )}
    </div>
    )
}

export default SongList;