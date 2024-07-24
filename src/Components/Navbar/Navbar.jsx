import React, { useCallback, useState } from 'react'
import './Navbar.css'
import logo from "../../assets/IPSALogo.svg"
import menu_icon from "../../assets/menu-icon.png"
const Navbar = () => {

  const [mobileMenu , setMobileMenu] = useState(false);
  const toggleMenu = () =>{
  mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  
  }
  return (
    <nav className='container'>
      <img src = {logo} alt = "" className='logo' />

    <ul className= {mobileMenu ? '' : 'hide-mobile-menu' }>
        <li> Home  </li>
        <li> Product  </li>
        <li> Feature  </li>
        <li> Pricing  </li>
        <li> Contact </li>
        <li><button className='btn'>Login </button> </li>
    </ul>
    <img src = {menu_icon} alt = "" className='menu_icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
