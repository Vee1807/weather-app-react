import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

const App = () => {
	<BrowserRouter>
	<Routes>
		<Route path='/' element={<Layout />}>
			<Route />
			<Route />
		</Route>
	</Routes>
	</BrowserRouter>
}

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
			<App />
	</React.StrictMode>,
)