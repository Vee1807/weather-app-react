import PropTypes from 'prop-types'
import WeatherIcons from '../data/WeatherIcons'
import { useState } from 'react'
const getDate = (dateStr) => {
    const date = new Date(dateStr)

    const dayOfWeek = date.getDay()

    const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
    const dayOfWeekString = days[dayOfWeek]

    const dayMonth = date.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'numeric',
    })

    return { day: dayOfWeekString, date: dayMonth }
}

const ForecastDay = ({ dayWeather, index }) => {

    const [isOpen, setIsOpen] = useState(false)

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
        <div className="flex flex-col py-3 px-7 border-b-2 h-full dark:border-gray-900 w-full text-black dark:text-white">
            <div className="grid grid-cols-12 flex-grow">
                <div className='col-span-3 flex flex-col items-start justify-center sm:text-xl xs:text-base text-sm'>
                    <b className='font-black text-amber-600 dark:text-amber-300'>{index === 0 ? 'TODAY' : date.day}</b>
                    <p className='text-gray-600 dark:text-gray-400 sm:text-base xs:text-sm text-xs'>{date.date}</p>
                </div>

                <div className='col-span-5 flex items-center  '>
                    <i className={icon + ' sm:text-5xl xs:text-4xl text-3xl mr-2'}></i>
                    <div className="h-fit flex flex-col ">
                        <b className="sm:text-2xl xs:text-xl text-base">{`${dayWeather.day.maxtemp_c}°`}</b>
                        <div className="text-gray-600 dark:text-gray-400 sm:text-xl xs:text-base text-sm">{`${dayWeather.day.mintemp_c}°C`}</div>
                    </div>
                </div>

                <div className="col-span-4 flex items-center justify-self-end">
                    <h3 className="font-bold sm:text-xl xs:text-base text-sm text-right">{dayWeather.day.condition.text}</h3>
                </div>

            </div>
            <div className='flex justify-end'>
            <button style={{WebkitTextStroke: '1px'}} className='font-black text-amber-600 dark:text-amber-300 '
                onClick={() => setIsOpen(prev => !prev)}>
                <i className={"bi bi-chevron-" + (isOpen ? 'up' : 'down')}></i>
            </button>                
            </div>
            <div className={`overflow-hidden transition-max-height duration-700 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>

            {isOpen &&
                <div className="grid grid-cols-2 mt-5 sm:text-base xs-text-sm text-xs text-gray-600 dark:text-gray-400">
                    <div>
                        <p><b className="text-gray-700 dark:text-gray-300">Wind: </b> {dayWeather.day.maxwind_kph} km/h</p>
                        <p><b className="text-gray-700 dark:text-gray-300">Humidity: </b> {dayWeather.day.avghumidity}%</p>
                    </div>

                    <div className='justify-self-end text-right'>
                        <p><b className="text-gray-700 dark:text-gray-300">Rain: </b> {dayWeather.day.daily_chance_of_rain}%</p>
                        <p><b className="text-gray-700 dark:text-gray-300">Snow: </b> {dayWeather.day.daily_chance_of_snow}%</p>
                    </div>


                </div>}
                </div>
        </div>
    )
}

ForecastDay.propTypes = {
    dayWeather: PropTypes.shape({
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
    }).isRequired,
    index: PropTypes.number.isRequired,
}

export default ForecastDay