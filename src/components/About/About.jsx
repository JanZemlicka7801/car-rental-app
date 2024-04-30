import React from 'react'
import Car from '../../assets/carAbout.jpg'
import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate();
    const redirect = () => {
        navigate('/cars')
    }
  return (
    <div className='bg-black text-white duration-300 sm:min-h-[600px]
    sm:grid sm:place-items-center'>
        <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
                <div
                data-aos='slide-right'
                data-aos-duration='1000'
                >
                <img src={Car} alt="" 
                className='sm:scale-105 sm:-translate-x-11 max-h-[300px] drop-shadow-[]'
                />
                </div>
                <div data-aos='slide-left'
                data-aos-duration='1000'>
                    <div className='space-y-5 sm:p-16 pb-6'>
                        <h1 className='text-3xl sm:text-4xl
                        font-bold font-serif'>About us</h1>
                        <p className='text-primary'>
                        Welcome to Bumblebee, your trusted car rental service. 
                        We offer a diverse fleet of well-maintained vehicles, 
                        easy booking, and exceptional customer service. 
                        Whether you need a compact car for city exploration or 
                        an SUV for a family adventure, we've got you covered. 
                        Enjoy hassle-free rentals with flexible options and 
                        convenient features, all designed to make your journey 
                        smooth and enjoyable. Thank you for choosing 
                        Bumblebee – let`s hit the road together!
                        </p>
                        <button onClick={() => redirect()} className='rounded-md border-2 border-primary hover:text-white 
                        hover:bg-primary duration-500 py-2 px-6 text-primary tracking-wider;'>
                            Get started
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About