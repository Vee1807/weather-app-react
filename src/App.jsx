import { Routes, Route } from "react-router-dom"
import { useState, useEffect } from 'react'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Hourly from './pages/Hourly.jsx'
import NotFound from './pages/NotFound.jsx'

const API_KEY = '75b36898c1284f41a32114039240704'
const getCurrentWeatherURL = (coord) => {
	return `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${coord}&days=3&aqi=no&alerts=no`
}

const App = () => {
	const [currentWeather, setCurrentWeather] = useState(null)
	const [forecastWeather, setForecastWeather] = useState(null)

	
	// Get weather data for user's location on reload
	useEffect(() => {
		let ignore = false
		const getCurrentLocation = async () => {
			try {
				const position = await new Promise((resolve, reject) => {
					navigator.geolocation.getCurrentPosition(resolve, reject)
				});
				if (!ignore) {
					const { latitude, longitude } = position.coords
					getWeatherData({ cityCoord: `${latitude},${longitude}` })
				}


			} catch (error) {
				console.error('Error fetching weather data:', error)
			}
		}

		getCurrentLocation()

		/*	
			This insures that the effect doesn't fire twice in development.
			Reference:
			https://react.dev/learn/synchronizing-with-effects#how-to-handle-the-effect-firing-twice-in-development
		*/
		return () => {
			ignore = true
		}

	}, [])


	
	const getWeatherData = async (selectedCity) => {
		try {
			const res = await fetch(getCurrentWeatherURL(selectedCity.cityCoord))
			const data = await res.json()

			/*setCitySuggestions([])
			setCity('')*/

			const cityLocation = data.location.region.length !== 0 ?
				`${data.location.region}, ${data.location.country}` :
				data.location.country

			setCurrentWeather({
				...data.current, cityName: data.location.name,
				cityLocation: cityLocation,
				localtime: data.location.localtime
			})
			setForecastWeather(data.forecast.forecastday)
		} catch (error) {
			console.error('Error fetching weather data:', error.message)
		}
	}



	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home currentWeather={currentWeather} 
				forecastWeather={forecastWeather}
				getWeatherData={getWeatherData}/>} />
				<Route path='Hourly' element={<Hourly />} />
				<Route path='*' element={<NotFound />}></Route>
			</Route>
		</Routes>
	)
}

export default App