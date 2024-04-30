import React from 'react'
import carPNG from '../../assets/carPNG.webp'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate();
    const redirect = () => {
        navigate('/cars')
    }
  return (
        <div className="bg-black text-white">
            <div className="container min-h-[620px] flex">
                <div className="grid place-items-center grid-cols-1 sm:grid-cols-2">
                    <div data-aos="zoom-in" data-aos-duration="1500" className='order-1 sm:order-2'>
                        <img src={carPNG} alt="" className='
                        flex -z-10 max-h-[600px] sm:scale-125'/>
                    </div>
                    <div className='order-2 sm:order-1 space-y-5
                    sm:pr-32'>
                        <p data-aos-delay="200"
                        data-aos="fade-up"
                        className='text-primary
                        text-2xl
                        font-serif'>
                            Transform your car rental experince with
                        </p>
                        <h1 data-aos-delay="400"
                        data-aos="fade-up"
                        className='text-5xl
                        lg:text-7xl font-semibold
                        font-serif'>Bumblebee</h1>
                        <p data-aos-delay="600"
                        data-aos="fade-up"
                        className='font-serif'>
                            The best car rental website you can find on the internet. Have years of an experince and milions of happy customers.
                        </p>
                        <button onClick={() => redirect()} data-aos-delay="800"
                        data-aos="fade-up" className='btn bg-primary
                        text-black px-6 py-2 rounded-md font-bold
                        hover:bg-primary/80 duration-500'>
                            Pick me
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header