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
<button className="w-[70px] h-[70px] border-radius: [50px] what">
        <a
          className="hide-type"
          target="_blank"
          href="https://api.whatsapp.com/send?phone=3122794831&text=Deseo agendar una cita de valoracion!!"
        >
          whatsapp
        </a>
      </button>

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