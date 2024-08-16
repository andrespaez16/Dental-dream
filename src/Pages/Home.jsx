import React from 'react'
import Hero from '../Components/Hero/Hero'
import NewsLetter from '../Components/NewsLetter/NewsLetter'
import "../Pages/Home.css";
import Service from '../Components/Service/Service';

const Home = () => {
  return (
    <div>
      <Hero/>
      <Service direction = {false}></Service>
      <Service  direction = {true}></Service>
      <Service direction = {false}></Service>
      <Service  direction = {true}></Service>
      <Service direction = {false}></Service>
      <Service  direction = {true}></Service>
      <NewsLetter/>
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
  )
}

export default Home