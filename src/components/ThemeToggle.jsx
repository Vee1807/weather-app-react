import { useState, useEffect } from 'react'
const getTheme = () => {
	if (localStorage.theme === "dark" || !("theme" in localStorage)) {
		document.documentElement.classList.add("dark");
		return "dark"
	} else {
		document.documentElement.classList.remove("dark");
		return "light"
	}
}

const getIcon = (theme) => {
	if (theme === "dark") {
		return "bi bi-moon-fill"
	} else {
		return "bi bi-brightness-low-fill"
	}
}

const ThemeToggle = () => {
	const [theme, setTheme] = useState(getTheme)

	const handleClick = () => {
		if (theme === "dark") {
			document.documentElement.classList.remove("dark");
			setTheme("light")
		} else {
			document.documentElement.classList.add("dark");
			setTheme("dark")
		}
	}

	useEffect(() => {
		const refreshTheme = () => {
			localStorage.setItem("theme", theme)
		}

		refreshTheme()
	}, [theme])

	return (
		<div className="text-3xl dark:text-xl text-amber-500 dark:text-white" onClick={handleClick}>
			<i className={getIcon(theme)}></i>
		</div>
	)
}

export default ThemeToggle