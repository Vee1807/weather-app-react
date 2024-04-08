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


export default Forecast