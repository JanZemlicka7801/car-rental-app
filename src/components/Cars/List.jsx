import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CarSelection from './CarSelection';

const List = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCar, setSelectedCar] = useState(null); // Track the selected car
  const navigate = useNavigate();

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

const handleCarSelect = (car, event) => {
  event.preventDefault(); // Prevent default behavior
  setSelectedCar(selectedCar === car ? null : car); // Toggle selected car
};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='bg-black text-white py-14 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32'>
      <h1 className='text-3xl font-semibold text-center font-serif sm:text-4xl mb-8'>
        Transform your next trip
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
        {cars.map((car) => (
          <div key={car.id} className='card p-4 rounded-lg border border-gray-300 hover:border-primary'>
            <h2 className='text-xl font-semibold mb-2'>{car.brand} {car.model} ({car.year})</h2>
            <p><span className='font-semibold'>Color:</span> {car.color}</p>
            <p><span className='font-semibold'>Mileage:</span> {car.mileage} km</p>
            <p><span className='font-semibold'>Daily Rental Rate:</span> ${car.daily_rental_rate}</p>
            <div className="w-full h-[200px]">
              <img onClick={(event) => handleCarSelect(car, event)} className='w-full h-full object-contain' src={car.image_url} alt={`${car.brand} ${car.model}`} />
            </div>
            <CarSelection showAdds={selectedCar !== null} car={selectedCar} />
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default List;
