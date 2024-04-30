import React from 'react'
import insurance from '../../assets/insurance.jpg'

const Heading = () => {
  return (
    <div className='bg-black text-white'>
        <div className="container min-h-[620px] flex">
            <div className="grid place-items-center grid-cols-1 sm:grid-cols-2">
                    <div data-aos="zoom-infade-up" data-aos-duration="1500" className='order-1 sm:order-2'>
                        <img src={insurance} alt="" className='
                        flex -z-10 max-h-[300px] sm:scale-125'/>
                    </div>
                    <div className='order-2 sm:order-1 space-y-5 sm:pr-32'
                    data-aos-delay="200" data-aos="zoom-in">
                        <p className='text-primary
                        text-2xl
                        font-serif'>
                            Pick your desire car from our selection
                        </p>
                        <h1
                        className='text-5xl
                        lg:text-7xl font-semibold
                        font-serif'>Insurance & Car Listing</h1>
                        <p
                        className='font-serif'>
                            Bumblebee as a leader in car rental services offers insurance to all of our cars for FREE
                        </p>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Heading