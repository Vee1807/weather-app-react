import PropTypes from 'prop-types'
import WeatherIcons from '../data/WeatherIcons'

const CurrentWeatherCard = ({ weather }) => {
    const localtime = weather.localtime
    const date = new Date(localtime)
    const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'short' })
    const formattedTime = date.toLocaleTimeString('en-US', { hour12: true, hour: 'numeric', minute: '2-digit' })
    const formattedDate = date.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: '2-digit' })
    const combinedDateTime = `${dayOfWeek} ${formattedDate} ${formattedTime}`
    const weatherCode = weather.condition.code
    let icon = ""
    const iconData = WeatherIcons[weatherCode]
    if (iconData === undefined) {
        icon = "bi bi-thermometer-half"
    } else {
        if (weather.is_day === 1) {
            icon = iconData["iconDay"]
        } else {
            icon = iconData["iconNight"]
        }
    }

    return (
        <div className="flex flex-col justify-between w-full text-white bg-blue-600 dark:bg-blue-900 shadow-md rounded-lg p-6">
            <div>
                <h2 className="xs:text-2xl text-xl font-semibold mb-2">{weather.cityName}</h2>
                <p className="xs:text-xl text-base">{weather.cityLocation}</p>
                <p className="text-gray-300 dark:text-gray-400 mt-3">{combinedDateTime}</p>
            </div>

            <div className="flex items-center my-5">
                <div className='sm:text-9xl xs:text-8xl text-7xl'>
                    <i className={icon}></i>
                </div>
                <div className="ml-10">
                    <h3 className="sm:text-3xl xs:text-xl text-base font-extrabold mb-1">{weather.condition.text}</h3>
                    <p className="sm:text-5xl xs:text-3xl text-2xl font-semibold">{weather.temp_c}°C</p>
                </div>
            </div>
            <div className="mt-4 sm:text-xl xs:text-base text-sm text-gray-300 dark:text-gray-400">
                <p className='flex justify-between mb-3 pb-3 border-b border-blue-500 dark:border-gray-400'><b className='text-white'>Real feel</b> {weather.feelslike_c}°C</p>
                <p className='flex justify-between mb-3 pb-3 border-b border-blue-500 dark:border-gray-400'><b className='text-white'>Wind</b> {weather.wind_kph} km/h</p>
                <p className='flex justify-between'><b className='text-white'>Humidity</b> {weather.humidity}%</p>
            </div>
        </div>
    )
}

CurrentWeatherCard.propTypes = {
    weather: PropTypes.shape({
        localtime: PropTypes.string.isRequired,
        condition: PropTypes.shape({
            code: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired,
        cityName: PropTypes.string.isRequired,
        cityLocation: PropTypes.string.isRequired,
        temp_c: PropTypes.number.isRequired,
        feelslike_c: PropTypes.number.isRequired,
        wind_kph: PropTypes.number.isRequired,
        humidity: PropTypes.number.isRequired,
        is_day: PropTypes.number.isRequired
    }).isRequired
}

export default CurrentWeatherCard