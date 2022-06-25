import React from 'react'
import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'

// styles
import './Navbar.css'

// images
import hockey_logo from "../assets/nan-hockey-logo.png"

// context
import { useAuthContext } from '../hooks/useAuthContext'

export default function Navbar() {
  const { logout } = useLogout()
  const { user } = useAuthContext()  

  const handleClick = (e) => {
    const navigation = document.querySelector('.navigation');
    navigation.classList.toggle('active')
  }

  return (    
      <nav className="main-nav">
        <a href="#" className="toggle-button" onClick={(e) => handleClick(e)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </a>
        <div className='logo-container'>
          <Link to="/"><img src={hockey_logo} alt="Nanaimo Adult Hockey League" className="hockey-logo" /></Link>      
        </div>
          <ul className="navigation">
            <li>NEWS</li>
            <li><Link to="/divisions">DIVISIONS</Link></li>          
            <li></li>          
            <li>REGISTRATION</li>
            {/* {!user && <li><Link to="/signup">SIGNUP</Link></li>} */}
            {!user && <li><Link to="/login">LOGIN</Link></li>}
            {user && <li onClick={logout}>LOGOUT</li>}
          </ul>      
      </nav>       
  )
}
