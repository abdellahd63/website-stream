import React from 'react'
import './Style/Navbar.css'

import Logo from './Logo.png'

import { Link } from 'react-router-dom'

const MyNavBar = () => {
  return (
    <div className='navbar'>
        <img src={Logo} alt="logo" height={90}/>

         <ul className='nav-menu'>
            <li><Link to="/">Acceuil</Link></li>

            <li><Link to="/services">Service apres vente</Link></li>

            <li><Link to="/help">Guide/Aide</Link></li>

            <li><Link to="/contact">Contact</Link></li>
          </ul>

    </div>
  )
}

export default MyNavBar