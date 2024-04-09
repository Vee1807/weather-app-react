import PropTypes from 'prop-types'

const SearchBar = (props) => {

    return (
        <div className="mt-5 mb-3">
            <div className="relative ">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
                <input autoComplete="off" type="search" className="block w-full p-4 ps-10 text-sm text-gray-900 border-2 border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none transition duration-200 ease-in-out"
                    placeholder='Search for city...'
                    onChange={(e) => props.handleCityChange(e.target.value)}
                    value={props.city}>
                </input>
            </div>

            {
                props.citySuggestions.length !== 0 &&
                <div className="absolute z-10 sm:w-4/5 w-11/12  mx-auto">
                    <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg overflow-hidden">
                        {props.citySuggestions.map((cityElem, index) => (
                            <div
                                className="border-b border-gray-200 dark:border-gray-700 px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
                                key={index}
                                onClick={() => props.handleCityClick(cityElem)}
                            >
                                <h3 className="font-semibold text-lg text-gray-800 dark:text-white">{cityElem.cityName}</h3>
                                <p className="text-base text-gray-600 dark:text-gray-300">{cityElem.cityDetails}</p>
                            </div>
                        ))}
                    </div>
                </div>

            }
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