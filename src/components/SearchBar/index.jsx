import './index.css';

function SearchBar(){
    const handleSearch = () => {
    }
    return (
        <div className="SearchBar">
          <input
            type="text"
            className="SearchBar__input"
          />
          <button className="SearchBar__button" onClick={handleSearch}>
            검색
          </button>
        </div>
      );
}

export default SearchBar