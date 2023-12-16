import React, { useState } from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

const GuessPanel = ({ apiKey, initialPosition, onGuessSubmit }) => {
  const [userMarker, setUserMarker] = useState(null);

  const mapContainerStyle = {
    width: '90%',
    height: '400px',
  };

  const handleMapClick = (event) => {
    // Set the user's marker position based on the click event
    setUserMarker({
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    });
  };

  const handleGuessSubmit = () => {
    // Invoke the provided callback with the user's guess
    onGuessSubmit(userMarker);
  };

  return (
    
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={initialPosition}
        zoom={5}
        onClick={handleMapClick}
      >
        {userMarker && <Marker position={userMarker} />}
      </GoogleMap>

      <div>
        <h2>Make Your Guess</h2>
        {userMarker && (
          <p>
            Your marker: Latitude {userMarker.lat}, Longitude {userMarker.lng}
          </p>
        )}
        <button onClick={handleGuessSubmit} disabled={!userMarker}>
          Submit Guess
        </button>
      </div>
    </LoadScript>
  );
};

export default GuessPanel;
