import WeatherIcons from '../data/WeatherIcons'

const CurrentWeatherCard = ({ weather }) => {
    const localtime = weather.localtime
    const date = new Date(localtime)
    const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'short' })
    const formattedTime = date.toLocaleTimeString('en-US', { hour12: true, hour: 'numeric', minute: '2-digit' })
    const combinedDateTime = `${dayOfWeek}, ${formattedTime}`
    const weatherCode = weather.condition.code
    let icon = ""
    const iconData = WeatherIcons[weatherCode]
    if (iconData === undefined) {
        icon = "bi bi-question-circle-fill"
    } else {
        if (weather.is_day == 1) {
            icon = iconData["iconDay"]
        } else {
            icon = iconData["iconNight"]
        }
    }

    return (
        <div className="weather-card">
            
            <h2>{weather.cityName}</h2>
            {<i className={icon}></i>}
            <h3>{`${weather.temp_c} °C`}</h3>
            <h3>{`Feels like: ${weather.feelslike_c} °C`}</h3>
            <p>{weather.condition.text}</p>
            <p>{`wind: ${weather.wind_kph} km/h`}</p>
            <p>{`humidity: ${weather.humidity}%`}</p>
            <p>{combinedDateTime}</p>

        </div>
    )
}

export default CurrentWeatherCard