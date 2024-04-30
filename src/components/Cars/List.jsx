import React, { useState, useEffect } from 'react';
import axios from 'axios';

const List = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get('http://localhost:8081/cars');
        setCars(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching cars:', error);
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='bg-black text-white grid py-14 '>
      <h1 data-aos='zoom-in' data-aos-delay='300' className='text-3xl font-semibold text-center font-serif sm:text-4xl'>
        Transform your next trip
      </h1>
      <div className='card text-left group space-y-3 sm:space-y-6 p-4 sm:py-16 rounded-lg duration-300 text-white'>
        {cars.map((car) => (
          <div key={car.id} data-aos="fade-up" data-aos-delay={car.aosDelay} className='border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group aos-init aos-animate w-auto'>
            <h2>{car.brand} {car.model} ({car.year})</h2>
            <p>Color: {car.color}</p>
            <p>Mileage: {car.mileage} km</p>
            <p>Daily Rental Rate: ${car.daily_rental_rate}</p>
            <div className="w-auto h-[120px]">
              <img className='w-auto sm:h-[200px] object-contain' src={car.image_url} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
