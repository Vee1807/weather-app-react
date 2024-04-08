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
        icon = "bi bi-question-circle-fill"
    } else {
        if (weather.is_day === 1) {
            icon = iconData["iconDay"]
        } else {
            icon = iconData["iconNight"]
        }
    }

    return (
        <div className="max-w-xs mx-auto bg-blue-300 dark:bg-blue-800 dark:text-white shadow-md rounded p-6">
            <h2 className="text-2xl font-semibold mb-2">{weather.cityName}</h2>
            <p className="text-xl">{weather.cityLocation}</p>
            <p className="text-gray-500 dark:text-gray-400 mb-4">{combinedDateTime}</p>
            <div className="flex items-center">
                <i className={icon} style={{ fontSize: '110px' }}></i>
                <div className="ml-4">
                    <h3 className="text-2xl font-semibold mb-1">{weather.condition.text}</h3>
                    <p className="text-4xl font-bold">{weather.temp_c}°C</p>
                </div>
            </div>
            <div className="mt-4">
                <p><b>Real feel</b> {weather.feelslike_c}°C</p>
                <p><b>Wind</b> {weather.wind_kph} km/h</p>
                <p><b>Humidity</b> {weather.humidity}%</p>
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