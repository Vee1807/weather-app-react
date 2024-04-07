const SearchBar = (props) => {

    return (
        <div className='search-bar'>
            <input
                placeholder='Search for city...'
                onChange={(e) => props.handleCityChange(e.target.value)}
                value={props.city}>
            </input>
            <div className="city-suggestion-li">
                {props.citySuggestions.map((cityElem, index) => {
                    return <div className="city-suggestion"
                        key={index}
                        onClick={() => props.handleCityClick(cityElem)}>
                        <h3>{cityElem.cityName}</h3>
                        <p>{cityElem.cityDetails}</p>
                    </div>
                })}
            </div>
        </div>
    )
}

export default SearchBar