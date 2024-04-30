import React, { useState } from 'react';
import ResponsiveMenu from "./ResponsiveMenu.jsx";
import { HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';


const NavLinks = [
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
const Navbar = ({ name }) => {
    const [showMenu, setShowMenu] = useState(false);
    const togglemenu = () => {
        setShowMenu(!showMenu);
    };
    const navigate = useNavigate();
    const LogOut = () => {
        window.localStorage.removeItem("isLogedIn")
        navigate('/')
    }
  return <nav className='shadow-md text-white bg-dark'>
        <div className="container md:py-0">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className='text-3xl font-bold font-serif'>
                    Welcome to Bumblebee</h1>
                </div>
                <div className='hidden md:block'>
                    <ul className='flex items-center gap-8'>
                        {NavLinks.map((data) => (
                        <li key={data.id}
                        className='py-4'>
                            <a
                            className='inline-block 
                            py-2 hover:border-b-2
                            hover:text-primary
                            hover:border-x-primary
                            transition-colors
                            duration-500 text-lg
                            font-medium' href={data.link}>
                                {data.name}
                            </a>
                        </li>
                        ))}
                        <li>
                        <button className='inline-block 
                            py-2 hover:border-b-2
                            hover:text-primary
                            hover:border-x-primary
                            transition-colors
                            duration-500 text-lg
                            font-medium' onClick={() => LogOut()}>Log out</button>
                    </li>
                    </ul>
                </div>
                {
                    showMenu?(
                        <HiMenuAlt1 onClick={togglemenu}
                        size={30}
                        className="cursor-pointer transition-all"
                        />
                    ): (
                        <HiMenuAlt3 onClick={togglemenu}
                        size={30}
                        className="cursor-pointer transition-all"
                        />
                    )
                }
            </div>
        </div>
        <ResponsiveMenu showMenu={showMenu} name={name}/>
    </nav>;
};

export default Navbar;
