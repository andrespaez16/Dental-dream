import React from "react";
import "./Hero.css";
import arrow_icon from "../Assets/arrow.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
      </div>
      <div className="hero-left fade-in">
        <div>
          <div className="hero-hand-icon">
            <p>Transformamos vidas creando sonrisas</p>
          </div>
          <p>Especialista en sonrisas naturales</p>
          <p>en medellin.</p>
        <button type="submit" className="hero-latest-btn">
          Agenda tu cita !!!
        </button>
        </div>
        {/* <section className="w-[400px] ml-[200px] mt-[50px]">
          <form action="#" className="space-y-8">
            <div>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light shadow-core"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div>
              <input
                type="text"
                id="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light shadow-core"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <textarea
                id="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 shadow-core"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
          </form>
        </section> */}
      </div>
    </div>
  );
};

export default Hero;
