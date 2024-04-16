import './index.css';

function SearchBar(){
    return (
        <div className="SearchBar">
          <input
            type="text"
            className="SearchBar__input"
          />
          <button className="SearchBar__button">
            검색
          </button>
        </div>
      );
}

export default SearchBar