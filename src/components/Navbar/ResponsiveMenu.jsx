import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
{/* */}
import { useNavigate } from 'react-router-dom';


export const navLinks = [
    {
        id: "1",
        name: "Home",
        link:"/home",
    },
    {
        id: "2",
        name: "Cars",
        link:"/cars",
    },
    {
        id: "3",
        name: "Booking",
        link:"/booking",
    }
]

const ResponsiveMenu = ({ name , showMenu }) => {
    {/* */}
    const navigate = useNavigate();
    const LogOut = () => {
        window.localStorage.removeItem("isLogedIn")
        navigate('/')
    }
  return (
    <div className={`${showMenu ? "left-0" : "-left-full"} fixed top-0 z-50 bg-gray-900 h-screen w-[75%] md:hidden rounded-r-xl shadow-md flex flex-col justify-between px-8 pb-6 pt-16 transition-all duration-300`}>
        <div className="card">
            <div className="flex items-center justify-start gap-3">
                <FaUserCircle size={50}/>
                <div>
                    <h1>
                        Hello {name}
                    </h1>
                </div>
            </div>
            <nav className='mt-12'>
                <ul className='space-y-4 text-xl'>
                    {
                        navLinks.map((data) => (
                            <li key={data.id}>
                                <a href={data.link}>{data.name}</a>
                            </li>
                        ))
                    }
                    {/* */}
                    <li>
                        <button onClick={() => LogOut()}>Log out</button>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default ResponsiveMenu
