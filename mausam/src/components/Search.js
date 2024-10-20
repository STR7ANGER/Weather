import '../styles/components/Search.scss';

function Search() {
  return <>
    <div className="search-container">
      <div className="search-icon">
      <i class="bi bi-search"></i>
      </div>
      <div className="search-input">
        <input type='text' name='search-city' placeholder="Drop the location..."/>
      </div>
    </div>
  </>
}

export default Search