import React from "react";
import "./NewsLetter.css";
import { Animate } from "react-simple-animate";
const NewsLetter = () => {
  return (
    <div className="mision-and-vision">
      <Animate
        play
        duration={2}
        end={{ opacity: 1, filter: "blur(0)" }}
        start={{ opacity: 0, filter: "blur(10px)" }}
      >
        <div className="mision">
          <h2 className="mision-title">Misión:</h2>
          <p className="mision-text">
            Ser un consultorio odontológico en constante evolución, conformado
            por los mejores especialistas en odontología, en constante
            formación, logrando mejores resultados en cada tratamiento y así
            ofrecer una atención personalizada a cada paciente. Nuestros valores
            son: excelencia en el servicio, honestidad, eficacia y respeto.
          </p>
        </div>
      </Animate>

      <Animate
        play
        duration={2.5}
        end={{ opacity: 1, filter: "blur(0)" }}
        start={{ opacity: 0, filter: "blur(10px)" }}
      >
        <div className="vision">
          <h2 className="vision-title">Visión:</h2>
          <p className="vision-text">
            Queremos ser reconocidos por nuestro profesionalismo y buen trato,
            llegando así a ser líderes en la atención integral de nuestros
            pacientes, la cual nos lleve a una proyección de crecimiento a nivel
            nacional y así podamos ayudar a más personas a tener la sonrisa que
            siempre han soñado.
          </p>
        </div>
      </Animate>
    </div>
  );
};

export default NewsLetter;
