import ThemeToggle from './ThemeToggle.jsx'

const Navbar = () => {
    return (
        <nav className="flex flex-row justify-between px-5  py-2 items-center text-blue-950 dark:text-white bg-white dark:bg-gray-900 shadow-md">
            <h1 className="sm:text-2xl text-xl font-black">Weather App</h1>
            <ThemeToggle />
        </nav>
    )
}

export default Navbar