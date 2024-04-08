import PropTypes from 'prop-types'
import ForecastDay from './ForecastDay'

const Forecast = ({ weather }) => {
    console.log("weather: ")
    console.log(weather)
    const daysForecast = weather.map((day, index) => {
        return <ForecastDay dayWeather={day} index={index} key={index}/>
    })
    return (
        <div>
            {daysForecast}
        </div>
    )
}

Forecast.propTypes = {
    weather: PropTypes.arrayOf(PropTypes.shape({
        date: PropTypes.string.isRequired,
        day: PropTypes.shape({
            condition: PropTypes.shape({
                code: PropTypes.number.isRequired,
                text: PropTypes.string.isRequired,
            }).isRequired,
            maxtemp_c: PropTypes.number.isRequired,
            mintemp_c: PropTypes.number.isRequired,
            maxwind_kph: PropTypes.number.isRequired,
            avghumidity: PropTypes.number.isRequired,
            daily_chance_of_rain: PropTypes.number.isRequired,
            daily_chance_of_snow: PropTypes.number.isRequired,
        }).isRequired,
    })).isRequired,
}


export default Forecast