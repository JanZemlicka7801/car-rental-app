import React from 'react';
import car1 from '../../assets/car1.png';
import car2 from '../../assets/car2.png';
import car3 from '../../assets/car3.png';
import { useNavigate } from 'react-router-dom'

const CarMap = [
    {
        id: '1',
        name: 'Peugeot 208',
        price: '80',
        image: car1,
        aosDelay: '0',
    },
    {
        id: '2',
        name: 'Audi A5',
        price: '150',
        image: car2,
        aosDelay: '400',
    },
    {
        id: '3',
        name: 'Range Rover Grand Cherokee',
        price: '200',
        image: car3,
        aosDelay: '800',
    }
]

const CarList = () => {
    const navigate = useNavigate();
    const redirect = () => {
        navigate('/cars')
    }
  return (
    <div className='pb-24 bg-black text-white pt-12'>
        <div className="container">
            <h1 data-aos='fade-up' className='text-3xl sm:text-4xl font-semibold font-serif mb-3 aos-init aos-animate'>
            Loads to choose from!
            </h1>
            <p data-aos='fade-up' className='text-sm pb-10 aos-init aos-animate'></p>
            <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
                {CarMap.map((car) => (
                    <div key={car.id} data-aos="fade-up" data-aos-delay={car.aosDelay}
                    className='space-y-3 border-2 border-gray-300 hover:border-primary
                    p-3 rounded-xl relative group aos-init aos-animate'>
                        <div className='w-full h-[120px]'>
                            <img className='w-full h-[120px] object-contain sm:translate-x-8 group-hover:translate-x-16 duration-700'
                            src={car.image} alt="" />
                        </div>
                        <div className='space-y-2'>
                            <h1 className='text-primary font-semibold'>{car.name}</h1>
                            <div className='flex justify-between items-center text-xl font-semibold'>
                                <p>${car.price}/day</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="grid place-content-center mt-8">
            <button onClick={() => redirect()} className='rounded-md border-2 border-primary hover:text-white 
                        hover:bg-primary duration-500 py-2 px-6 text-primary 
                        tracking-wider aos-init aos-animate'
                        href="">
                Book me
            </button>
            </div>
            
            </div>
        </div>
    </div>
  )
}

export default CarList;
