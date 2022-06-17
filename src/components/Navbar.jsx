import React from 'react'

// styles
import './Navbar.css'

// images
import hockey_logo from "../assets/nan-hockey-logo.png"

export default function Navbar() {
  return (
    <div>
      <nav className="main">
        <img src={hockey_logo} alt="Nanaimo Adult Hockey League" className="hockey-logo" />
        <div className="navigation">
          <div>NEWS</div>
          <div>DIVISIONS</div>
          <div>SPARE BOARD & REGISTRATION</div>
          <div>LEAGUE & SOCIETY</div>
          <div>REFEREES SECTION</div>
          <div>SUSPENSIONS</div>
        </div>      
      </nav>
    </div>    
  )
}
