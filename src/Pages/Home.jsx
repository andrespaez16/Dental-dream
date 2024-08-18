import React from "react";
import Hero from "../Components/Hero/Hero";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import "../Pages/Home.css";
import Service from "../Components/Service/Service";


const Home = () => {
  const data = [
    {
      direction: false,
      classPhoto:'service-photo',
      title: "Odontología general",
      text: "La odontología General Operatoria o restauradora es la que nos permite dar solución a los problemas básicos de la boca en todo su conjunto. Es muy importante ya que se convierte en el primer contacto entre el paciente y el Odontólogo.Además es allí donde el odontólogo general hace una evaluación del tratamiento que se requiere para cada persona y si es el caso, hace remisión a cualquiera de los especialistas.",
    },
    {
      direction: true,
      classPhoto:'service-photo-diseño',
      title: "Diseño de sonrisa",
      text: "DentalDream tiene uno de los equipos de odontólogos especialistas más completos en diseño de sonrisa en Medellín. Venga, llámenos al (604) 444 8911 y compruébelo ahora mismo. Estaremos atentos para definir su tratamiento ideal dependiendo de su situación clínica y presupuesto. Tenemos un laboratorio digital propio y esto garantiza optimización de costos, resultados y tiempos",
    },
    {
      direction: false,
      classPhoto:'service-photo-ortodoncia',
      title: "Ortodoncia",
      text: "La ortodoncia se encarga de corregir las anomalías de forma, posición y oclusión de las estructuras dentomaxilofaciales, manteniendo una armonía y un óptimo estado de la salud oral. En algunos casos, los dientes se ven a simple vista alineados, pero no hay una oclusión correcta entre los maxilares superior e inferior y es aquí donde también se debe actuar con prontitud para corregir problemas futuros, como el desgaste dental, la pérdida ósea o de piezas dentales a temprana edad.",
    },
    {
      direction: true,
      classPhoto:'service-photo-child',
      title: "Odontopediatría",
      text: "La odontopediatría en Medellín o también conocida como odontología infantil, es una especialización de la odontalgia encarda de la salud de los niños. Se ocupa no solo de la prevención, el diagnóstico y el tratamiento de afeccione dentales en lo menores de edad, sino también de un tema fundamental y es una labor educativa al engeñarle a todos sus pacientes y sus acompañantes el cómo se deben cuidar y mantener sanos y limpios sus dientes.",
    },
    {
      direction: false,
      classPhoto:'service-photo-implants',
      title: "Implantes",
      text: "Los implantes dentales en Medellín actualmente son la opción más utilizada para reemplazar una pieza dental, ya que se entrega a los pacientes una solución definitiva. Muchas veces antes de realizar una cirugía de este tipo, se requiere proceder con un injerto óseo para que el tornillo implantado tenga una excelente fijación.",
    },
    {
      direction: true,
      classPhoto:'service-photo-oral',
      title: "Rehabilitación Oral",
      text: "La Rehabilitación Oral es una especialidad de la Odontología encargada de la restauración de las piezas dentales para devolverle su función estética y armónica oral mediante Prótesis Dentales, siempre buscando una oclusión y función correcta.",
    },
    {
      direction: false,
      classPhoto:'service-photo-periodoncia',
      title: "Periodoncia",
      text: "La periodoncia en Medellín es una especialización de la odontología y cuya función es la prevención, diagnóstico y tratamiento de enfermedades que afectan el periodonto, es decir, todos aquellos elemento que se encuentran alrededor de los dientes, tales como las encías, el ligamento periodontal, el cemento radicular y por último el hueso alveolar quien es el encargado de soportar todos los dietes.",
    },
  ];
  return (
    <div>
      <Hero />
      {data.map((card) => {
        return <Service info={card}></Service>;
      })}

      <NewsLetter />
      <button className="w-[70px] h-[70px] border-radius: [50px] what">
        <a
          className="hide-type"
          target="_blank"
          href="https://api.whatsapp.com/send?phone=3006406246&text=Hola deseo conocer los productos de la tienda !!!"
        >
          whatsapp
        </a>
      </button>
    </div>
  );
};

export default Home;
