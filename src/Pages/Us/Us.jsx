import React from "react";
import "../../Pages/DentalSpecialties/DentalSpecialties.css";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";
// import "../Assets/reabiltacion.jpg";
import { MapContainer, TileLayer, useMap,Popup, Marker } from 'react-leaflet'
const Us = () => {
  const position = [51.505, -0.09]
  return (
<>
<NewsLetter />


{/* <MapContainer center={position} zoom={13} >
    <TileLayer
     
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer> */}

</>
  );
};

export default Us;