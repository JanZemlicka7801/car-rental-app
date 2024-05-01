import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const CarSelection = ({ showAdds, car, name }) => {
  const [addons, setAddons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [rentalDays, setRentalDays] = useState([]); 
  const addonsContainerRef = useRef();

  useEffect(() => {
    const fetchAddons = async () => {
      try {
        const response = await axios.get('http://localhost:8081/addons');
        setAddons(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching addons:', error);
        setLoading(false);
      }
    };

    if (showAdds) {
      fetchAddons();
    }
  }, [showAdds]);

  const toggleAddonSelection = (addonId) => {
    setSelectedAddons((prevSelected) => {
      if (prevSelected.includes(addonId)) {
        return prevSelected.filter((id) => id !== addonId);
      } else {
        return [...prevSelected, addonId];
      }
    });
  };

  const handleRentalDaysChange = (event) => {
    setRentalDays(parseInt(event.target.value));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:8081/rentals', {
        name: name,
        car_id: car.car_id,
        addons: selectedAddons,
        rental_days: rentalDays
      });
  
      if (response.data && response.data.message === "Rental submitted successfully") {
        alert('Rental submitted successfully!');
      } else {
        console.error('Error submitting rental:', response.data);
        alert('Failed to submit rental. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting rental:', error);
      alert('Failed to submit rental. Please try again later.');
    }
  };
  
  useEffect(() => {
    if (addonsContainerRef.current) {
      addonsContainerRef.current.scrollTop = 0;
    }
  }, [showAdds]);

  return (
    <div ref={addonsContainerRef}>
      {showAdds && (
        <>
          <h2 className='text-primary'>Add-ons</h2>
          {loading ? (
            <div>Loading addons...</div>
          ) : (
            <ul>
              {addons.map((addon) => (
                <li key={addon.id}>
                  <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <input
                      type="checkbox"
                      checked={selectedAddons.includes(addon.id)}
                      onChange={() => toggleAddonSelection(addon.id)}
                    />
                    <span>{addon.name}</span>
                    <span style={{ color: 'red' }}>
                      ${addon.price}
                    </span>
                  </label>
                </li>
              ))}
            </ul>
          )}
          <form onSubmit={handleSubmit}>
            <label className='text-center'>
              Rental Days:
              <input
                type="number"
                value={rentalDays}
                onChange={handleRentalDaysChange}
                min={1}
                className='border text-center border-gray-300 rounded-md p-2 mr-2 text-black'
              />
            </label>
            <button className='bg-primary hover:bg-white hover:text-black text-black px-4 py-2 rounded-md' type="submit">Submit Rental</button>
          </form>
        </>
      )}
    </div>
  );
};

export default CarSelection;
