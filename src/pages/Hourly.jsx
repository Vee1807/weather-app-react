import { Link, useLocation } from 'react-router-dom'
import HourlyCard from '../components/HourlyCard'

const getDate = (dateStr) => {
    const date = new Date(dateStr)
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const dayOfWeek = days[date.getDay()]
    const newDateStr = date.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric'
    })

    return `${dayOfWeek} ${newDateStr}`
}

const Hourly = () => {
    const { state } = useLocation()
    const weatherArr = state.weather
    const hourlyForecast = weatherArr.map((weather, index) => {
        return <HourlyCard weather={weather} key={index} />
    })

    return (
        <div className='mb-10'>
            <div className='flex items-center border-b-2  border-blue-700 dark:border-blue-400 pb-5 mt-5 sm:text-2xl xs:text-xl text-base'>
                <Link to=".." relative="path" className='text-blue-950 dark:text-blue-400'>
                    <i className="bi bi-arrow-left-circle-fill mr-5 "></i>
                </Link>
                <h2 className='text-blue-950 dark:text-white font-extrabold'>{getDate(state.date)}</h2>


            </div>
            {hourlyForecast}
        </div>
    )
}

export default Hourly