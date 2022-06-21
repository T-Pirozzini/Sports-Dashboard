import React from 'react'
import { Link } from 'react-router-dom'

// styles
import './Navbar.css'

// images
import hockey_logo from "../assets/nan-hockey-logo.png"

export default function Navbar() {
  return (    
      <nav className="main">       
        <ul className="navigation">
          <li>NEWS</li>
          <li ><Link to="/divisions">DIVISIONS</Link></li>          
          <li>SPARE BOARD & REGISTRATION</li>
          <img src={hockey_logo} alt="Nanaimo Adult Hockey League" className="hockey-logo" />
          <li>LEAGUE & SOCIETY</li>
          <li>REFEREES SECTION</li>
          <li>SUSPENSIONS</li>
        </ul>      
      </nav>       
  )
}
