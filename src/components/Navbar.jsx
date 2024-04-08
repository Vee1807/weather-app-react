import ThemeToggle from './ThemeToggle.jsx'

const Navbar = () => {
    return (
        <nav className="flex flex-row justify-between px-7 py-2 items-center text-white bg-blue-600">
            <h1 className="text-2xl font-black">Weather App</h1>
            <ThemeToggle />
        </nav>
    )
}

export default Navbar