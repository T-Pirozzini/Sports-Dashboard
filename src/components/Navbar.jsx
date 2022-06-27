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
    const navigation = document.querySelectorAll('.navigation li');
    const background = document.querySelector('.navigation');    
    let lis = Array.from(navigation)    
    lis.map(li => {
      li.classList.toggle('active')
    })
    background.classList.toggle('active')    
  }

  return (    
      <nav className="main-nav">        
        <a href="#" className="toggle-button" onClick={(e) => handleClick(e)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </a>        
      
        <ul className="navigation">
          <li><Link to="/news">NEWS</Link></li>
          <li><Link to="/divisions">DIVISIONS</Link></li> 
          <li><Link to="/schedule">SCHEDULE</Link></li>         
          <div className='logo-container'>
            <Link to="/"><img src={hockey_logo} alt="Nanaimo Adult Hockey League" className="hockey-logo" /></Link>      
          </div>                      
          {!user && <li>REPORT</li>}
          {user && <li><Link to="/schedule">ADMIN</Link></li>}
          {!user && <li><Link to="/schedule">REFEREE</Link></li>}
          {user && <li className='auth-links'><Link to="/signup">REGISTER</Link></li>}
          {!user && <li><Link to="/login">LOGIN</Link></li>}
          {user && <li className='auth-links' onClick={logout}>LOGOUT</li>}
        </ul>                
      </nav>       
  )
}
