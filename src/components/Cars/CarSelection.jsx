import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const CarSelection = ({ showAdds, car }) => {
  const [addons, setAddons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedAddons, setSelectedAddons] = useState([]);
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

  useEffect(() => {
    if (addonsContainerRef.current) {
      addonsContainerRef.current.scrollTop = 0;
    }
  }, [showAdds]);

  return (
    <div ref={addonsContainerRef}>
      {showAdds && (
        <>
          <h2>Add-ons</h2>
          {loading ? (
            <div>Loading addons...</div>
          ) : (
            <ul>
              {addons.map((addon) => (
                <li key={addon.id}>
                  <label>
                    <input
                      type="checkbox"
                      checked={selectedAddons.includes(addon.id)}
                      onChange={() => toggleAddonSelection(addon.id)}
                    />
                    {addon.name}
                  </label>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
};

export default CarSelection;
