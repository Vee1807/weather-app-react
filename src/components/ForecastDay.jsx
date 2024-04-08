import PropTypes from 'prop-types'
import WeatherIcons from '../data/WeatherIcons'

const getDate = (dateStr) => {
    const date = new Date(dateStr)

    const dayOfWeek = date.getDay()

    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const dayOfWeekString = days[dayOfWeek]

    const dayMonth = date.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'numeric',
    })

    return { day: dayOfWeekString, date: dayMonth }
}

const ForecastDay = ({ dayWeather }) => {
    const date = getDate(dayWeather.date)
    const weatherCode = dayWeather.day.condition.code
    let icon = ""
    const iconData = WeatherIcons[weatherCode]
    if (iconData === undefined) {
        icon = "bi bi-thermometer-half"
    } else {
        icon = iconData["iconDay"]
    }

    return (
        <div className="py-3 px-7 border-b-2 dark:border-gray-900 w-full text-black dark:text-white">
            <div className="grid grid-cols-12">
                <div className='col-span-3 flex flex-col items-start justify-center sm:text-xl xs:text-base text-sm'><b className='text-amber-600 dark:text-amber-300'>{date.day}</b><p>{date.date}</p></div>

                <div className='col-span-5 flex items-center  '>
                    <i className={icon + ' sm:text-5xl xs:text-4xl text-3xl mr-2'}></i>
                    <div className="h-fit flex flex-col ">
                        <b className="sm:text-2xl xs:text-xl text-base">{`${dayWeather.day.maxtemp_c}°`}</b>
                        <div className="sm:text-xl xs:text-base text-sm">{`${dayWeather.day.mintemp_c}°`}</div>
                    </div>
                </div>

                <div className="col-span-4 flex items-center justify-self-end ">
                    <h3 className="font-bold sm:text-xl xs:text-base text-sm text-right">{dayWeather.day.condition.text}</h3>
                </div>

            </div>
            <div className="grid grid-cols-2 mt-5 sm:text-base xs-text-sm text-xs ">
                <div>
                    <p><b>Wind - </b> {dayWeather.day.maxwind_kph} km/h</p>
                    <p><b>Humidity - </b> {dayWeather.day.avghumidity}%</p>
                </div>

                <div className='justify-self-end text-right'>
                    <p><b>Rain - </b> {dayWeather.day.daily_chance_of_rain}%</p>
                    <p><b>Snow - </b> {dayWeather.day.daily_chance_of_snow}%</p>
                </div>


            </div>
        </div>
    )
}


export default ForecastDay