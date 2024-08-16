import React from "react";
import "./Service.css";

const Service = (props) => {
    console.log(props.direction, 'estaisoos')
  return (
    <div className="service flex flex-wrap flex-row">
      {props.direction ? (
        <>
          <div className="service-text">
            <h2>test</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nisi inventore molestias culpa? Libero vitae rem pariatur et cum quaerat officia laboriosam, perferendis natus, animi aperiam amet voluptas, a voluptatem.</p>

          </div>
          <div className="service-photo">

          </div>
        </>
      ) : (
        <>
          <div className="service-photo">

          </div>
          <div className="service-text">
          <h2>test</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nisi inventore molestias culpa? Libero vitae rem pariatur et cum quaerat officia laboriosam, perferendis natus, animi aperiam amet voluptas, a voluptatem.</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Service;
