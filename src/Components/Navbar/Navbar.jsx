import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/LogoEmpresa.png'
import nav_dropdown from '../Assets/nav_dropdown.png'
import { Link } from 'react-router-dom'


const Navbar = () => {
    const [menu,setMenu] = useState("shop");
    const menuRef = useRef();

    const dropdown_toggle = (e) => {
      menuRef.current.classList.toggle('nav-menu-visible');
      e.target.classList.toggle('open');
    }

  return (
    <div className='navbar'>
      <Link to='/' onClick={()=>{setMenu("shop")}} className="nav-logo">
        <img src={logo} alt=""/>

      </Link>
      <img onClick={dropdown_toggle} className='nav-dropdown' src={nav_dropdown} alt="" />
      <ul ref={menuRef} className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><Link to='/'>Servicios</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("mens")}}><Link to='/mens'>Especialidades</Link>{menu==="mens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("womens")}}><Link to="womens">Nosotros</Link>{menu==="womens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Contactanos")}}><Link to='/kids'>Contactanos</Link>{menu==="kids"?<hr/>:<></>}</li>
      </ul>
  
    </div>
  )
}

export default Navbar
