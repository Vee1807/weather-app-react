import PropTypes from 'prop-types'
import WeatherIcons from '../../data/WeatherIcons'
import './CurrentWeatherCard.css'

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
        <div className="weather-card">
            <h2 className="weather-card-title">{weather.cityName}</h2>
            <p className="weather-card-location">{weather.cityLocation}</p>
            <p className="weather-card-date">{combinedDateTime}</p>
            <div className="weather-card-condition">
                <i className={icon}></i>
                <div className="weather-card-condition-details">
                    <h3 className="weather-card-condition-text">{weather.condition.text}</h3>
                    <p className="weather-card-temp"><b>{`${weather.temp_c}°`}</b>C</p>

                </div>
            </div>
            <div className="weather-card-details">
                <p><b>Real feel</b>{`${weather.feelslike_c} °C`}</p>
                <p><b>Wind</b>{`${weather.wind_kph} km/h`}</p>
                <p><b>Humidity</b>{`${weather.humidity}%`}</p>
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