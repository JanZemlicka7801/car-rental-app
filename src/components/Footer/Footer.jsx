import React from 'react'
import { FaLocationArrow, FaMobileAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black">
      <div className='bg-dark rounded-t-3xl'>
        <div className="container">
          <div className="grid place-items-center grid-cols-1 sm:grid-cols-2">
            <div className='py-8 px-4'>
              <h1 className="text-xl sm:text-3xl font-bold sm:text-left text-justify mb-3 gap-3 flex items-center">
                Bumblebee Rental
              </h1>
              <p className='text-white mt-7'>
                Premium vehicles without premium prices. 
                We have over 222,000 rental vehicles in our fleet, 
                which hosts models from some of the best car 
                manufacturers in the world, including German 
                favorites such as BMW, Mercedes, Audi and more.
              </p>
              <div className="flex items-center gap-3 mt-8">
                <FaLocationArrow />
                <p>Dundalk, Ireland</p>
              </div>
              <div className='flex items-center gap-3 mt-8'>
                <FaMobileAlt />
                <p>+353 83 152 6942</p>
              </div>
            </div>
            <div name='left' className="ml-8 mb-4">
              <h5 className="text-white mb-4">
                Head Office
              </h5>
              <p className="text-primary">
                0.5 Guiness, Temple Bar, Dublin
              </p>
              <p className="text-primary">Phone: +353 83 152 6942 </p>
              <p className="text-primary">Email: example@gmail.com</p>
              <p className="text-primary">Office Time: 10am - 6pm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
