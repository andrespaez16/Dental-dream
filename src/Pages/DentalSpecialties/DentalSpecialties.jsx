import React from "react";
import "../../Pages/DentalSpecialties/DentalSpecialties.css";
import Service from "../../Components/Service/Service";
// import "../Assets/reabiltacion.jpg";
const DentalSpecialties = () => {
  const data = [
    {
      direction: false,
      classPhoto: "service-photo",
      title: "specialities.title_general",
      text: "specialities.text_general",
    },
    {
      direction: true,
      classPhoto: "service-photo-diseño",
      title: "specialities.design_title",
      text: "specialities.degisgn_text",
    },
    {
      direction: false,
      classPhoto: "service-photo-ortodoncia",
      title: "specialities.title_ortodoncia",
      text: "specialities.text_ortdoncia",
    },
    {
      direction: true,
      classPhoto: "service-photo-child",
      title: "specialities.title_odonpentria",
      text: "specialities.text_odonpentria",
    },
    {
      direction: false,
      classPhoto: "service-photo-implants",
      title: "specialities.title_implantes",
      text: "specialities.text_implantes",
    },
    {
      direction: true,
      classPhoto: "service-photo-oral",
      title: "specialities.title_oral",
      text: "specialities.text_oral",
    },
    {
      direction: false,
      classPhoto: "service-photo-periodoncia",
      title: "specialities.title_periodoncia",
      text: "specialities.text_periodoncia",
    },
  ];

  return (
<>
    <div className="especialidades-container">
      <div className="especialidades">
        <h2 className="especialidades-text">Especialidades</h2>
      </div>
      {data.map((card) => {
        return <Service info={card}></Service>;
      })}
    </div>
    <button className="w-[70px] h-[70px] border-radius: [50px] what">
        <a
          className="hide-type"
          target="_blank"
          href="https://api.whatsapp.com/send?phone=3006406246&text=Hola deseo conocer sobre los servicios!!!"
        >
          whatsapp
        </a>
      </button>
</>
  );
};

export default DentalSpecialties;
