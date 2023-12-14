import React from "react";
import {
  GoogleMap,
  StreetViewPanorama,
  LoadScript,
} from "@react-google-maps/api";

const StreetView = (props) => {
  const mapContainerStyle = {
    width: "70%",
    height: "400px",
  };

  return (
    <LoadScript googleMapsApiKey={props.apiKey}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={props.position}
        zoom={14}
      >
        <StreetViewPanorama position={props.position} visible />
      </GoogleMap>
    </LoadScript>
  );
};

export default StreetView;
