import { useState, useEffect } from "react";
import axios from "axios";

const LatLngToAddr = ({ lat, lng }) => {
  const [address, setAddress] = useState("No address set r8 nw.");

  useEffect(() => {
    const fetchAddress = async () => {
      const apiKey_OpenCage = "295c379196f047e2addd1e52bae1b815"; 
      const url = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=${apiKey_OpenCage}`;

      try {
        const response = await axios.get(url);
        const results = response.data.results;
        if (results.length > 0) {
          setAddress(results[0].formatted);
        } else {
          setAddress("Address not found");
        }
      } catch (error) {
        console.error("Error fetching the address: ", error);
        setAddress("Error fetching the address");
      }
    };

    fetchAddress();
  }, [lat, lng]);

  return (
    <div>
      <h3>Latitude: {lat}</h3>
      <h3>Longitude: {lng}</h3>
      <h4>Address: {address}</h4>
    </div>
  );
};

export default LatLngToAddr;
