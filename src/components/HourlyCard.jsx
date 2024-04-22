import { useState } from 'react'
import WeatherIcons from '../data/WeatherIcons'

const HourlyCard = ({ weather }) => {

    const [isOpen, setIsOpen] = useState(false)
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

    const time = weather.time.split(' ')[1]
    return (

        <div onClick={() => setIsOpen(prev => !prev)}
            className="bg-transparent hover:bg-gray-200 hover:dark:bg-gray-900 flex flex-col py-3 px-7 border-b-2 h-full dark:border-gray-900 w-full text-black dark:text-white">
            <div className="grid grid-cols-4 flex-grow gap-7">
                <div className='flex flex-col items-start justify-center sm:text-2xl xs:text-xl text-base'>
                    <b className='font-black text-amber-600 dark:text-amber-300'>{time}</b>
                </div>

                
                <div className='flex flex-wrap'>
                    <i className={icon + ' sm:text-5xl xs:text-4xl text-3xl mr-2'}></i>
                    <div className="text-gray-700 dark:text-gray-300 sm:text-2xl xs:text-base text-sm">{`${weather.temp_c}°C`}</div>

                </div>

                <div className=" text-gray-800 dark:text-gray-200 sm:text-2xl xs:text-base text-sm">
                    <b>
                        Real Feel:
                    </b>
                    {` ${weather.feelslike_c}°C`}
                </div>

                <div className="flex items-center justify-self-end">
                    <h3 className="font-bold sm:text-xl xs:text-base text-sm text-right">{weather.condition.text}</h3>
                </div>

            </div>
            <div className='flex justify-end'>
                <button style={{ WebkitTextStroke: '1px' }} className='font-black text-amber-600 dark:text-amber-300'>
                    <i className={"bi bi-chevron-" + (isOpen ? 'up' : 'down')}></i>
                </button>
            </div>
            <div className={`overflow-hidden flex flex-col justify-end transition-height duration-300 ease-in-out ${isOpen ? 'h-11 visible' : 'h-0 invisible'}`}>

                {isOpen &&
                    <div className="grid grid-cols-2 mt-5 sm:text-base xs-text-sm text-xs text-gray-600 dark:text-gray-400">
                        <div>
                            <p><b className="text-gray-700 dark:text-gray-300">Wind: </b> {weather.wind_kph} km/h</p>
                            <p><b className="text-gray-700 dark:text-gray-300">Humidity: </b> {weather.humidity}%</p>
                        </div>

                        <div className='justify-self-end text-right'>
                            <p><b className="text-gray-700 dark:text-gray-300">Rain: </b> {weather.chance_of_rain}%</p>
                            <p><b className="text-gray-700 dark:text-gray-300">Snow: </b> {weather.chance_of_snow}%</p>
                        </div>


                    </div>}
            </div>
        </div>
    )
}

export default HourlyCard