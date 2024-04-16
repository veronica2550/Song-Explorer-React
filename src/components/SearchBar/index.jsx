import './index.css';
import { getSongs } from '../../apis/song';
import { useRef } from 'react';

function SearchBar(props){
    // Hook 방법
    const inputRef = useRef();
    const handleSearch = () => {
        getSongs(inputRef.current.value).then((res) => {
            props.setData(res.data);
        })
    }
    return (
        <div className="SearchBar">
          <input
            type="text"
            className="SearchBar__input"
            ref={inputRef}
            onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    handleSearch();
                }
            }}
          />
          <button className="SearchBar__button" onClick={handleSearch}>
            검색
          </button>
        </div>
      );
}

export default SearchBar