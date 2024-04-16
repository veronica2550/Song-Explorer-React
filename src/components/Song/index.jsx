import './index.css';

function Song({title, no, singer}){
    return(
        <div className="Song">
            <div>
                <div className="Song__title">{title}</div>
                <div className="Song__singer">{singer}</div>
            </div>
            <div className="Song__no">{no}</div>
        </div>
    )
}

export default Song;