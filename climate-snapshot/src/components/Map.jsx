import React, {useState} from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import LatLngToAddr from './API_Fetches/latlngToAddr';

import customMarker from "./icons/marker.png";
const AddMarkerOnClick = ({ setMarker }) => {
  // Capture map clicks
  useMapEvents({
    click(e) {
      // Add marker on click
      setMarker(e.latlng);
    },
  });
  return null;
};

const Maps = () => {
  // Coordinates to center the map on India
  const indiaPosition = [22.5937, 79.9629]; // Latitude and Longitude of India
  const [marker, setMarker] = useState(null);

  const customIcon = new L.icon({ 
    iconUrl: customMarker,
    iconSize: [38, 38], // Size of the icon
    iconAnchor: [22, 38], // Point of the icon that corresponds to the marker's location
    popupAnchor: [-3, -38], // Where the popup should open relative to the iconAnchor
  });

  return (
    <>
    {/* <h1>Error</h1> */}
    <MapContainer center={indiaPosition} zoom={4.5} style={{ height: '500px', width: '40%' }}>
      {/* TileLayer provides the map tiles. You can use OpenStreetMap or any other map tile provider */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <AddMarkerOnClick setMarker={setMarker} />

      {marker && <Marker position={marker} icon={customIcon} />}
    </MapContainer>

    {(LatLngToAddr(marker.lat, marker.lng))}
    </>
  );
};

export default Maps;
