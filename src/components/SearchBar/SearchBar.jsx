import PropTypes from 'prop-types'
import './SearchBar.css'

const SearchBar = (props) => {

    return (
        <div className='search-bar'>
            <input
                placeholder='Search for city...'
                onChange={(e) => props.handleCityChange(e.target.value)}
                value={props.city}>
            </input>
            {props.citySuggestions.length !== 0 && <div className="city-suggestion-li">
                {props.citySuggestions.map((cityElem, index) => {
                    return <div className="city-suggestion"
                        key={index}
                        onClick={() => props.handleCityClick(cityElem)}>
                        <h3 className="city-name">{cityElem.cityName}</h3>
                        <p className="city-details">{cityElem.cityDetails}</p>
                    </div>
                })}
            </div>}
        </div>
    )
}


SearchBar.propTypes = {
    handleCityChange: PropTypes.func.isRequired,
    handleCityClick: PropTypes.func.isRequired,
    city: PropTypes.string.isRequired,
    citySuggestions: PropTypes.arrayOf(
        PropTypes.shape({
            cityName: PropTypes.string.isRequired,
            cityDetails: PropTypes.string.isRequired
        })
    ).isRequired
}


export default SearchBar