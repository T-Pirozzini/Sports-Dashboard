import React from 'react'
import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'

// styles
import './Navbar.css'

// images
import hockey_logo from "../assets/nan-hockey-logo.png"

export default function Navbar() {
  const { logout } = useLogout()

  return (    
      <nav className="main-nav">       
        <ul className="navigation">
          <li>NEWS</li>
          <li><Link to="/divisions">DIVISIONS</Link></li>          
          <li>REGISTRATION</li>          
          <Link to="/"><img src={hockey_logo} alt="Nanaimo Adult Hockey League" className="hockey-logo" /></Link>
          <li><Link to="/signup">SIGNUP</Link></li>
          <li><Link to="/login">LOGIN</Link></li>
          <li onClick={logout}>LOGOUT</li>
        </ul>      
      </nav>       
  )
}
