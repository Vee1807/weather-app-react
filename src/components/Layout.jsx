import { Outlet } from "react-router-dom"
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'

const Layout = () => {
    return (
        <>
            <div className="font-sans min-h-screen flex flex-col dark:text-white text-black ">
                <Navbar />
                <div className='sm:w-4/5 w-11/12 mx-auto flex-grow'>
                   <Outlet /> 
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Layout