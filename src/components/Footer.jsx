import React from 'react'
import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'

// styles
import './Footer.css'

// context
import { useAuthContext } from '../hooks/useAuthContext'

export default function Footer() {
  const { logout } = useLogout()
  const { user } = useAuthContext() 

  return (
    <div>
      {/* footer */}
      <div className="footer-main">
        <div className="footer-container">
          <ul className="about-footer">            
            <li><Link to="/news">NEWS</Link></li>
            <li><Link to="/standings">RULES/REGULATIONS</Link></li>            
          </ul>
          <ul className="divisions-footer">
            <li><Link to="/divisions">DIVISIONS</Link></li>
            <li><Link to="/standings">STANDINGS</Link></li>            
          </ul>
          <ul className="league-society">
            <li><Link to="/standings">REFEREE</Link></li>
            <li><Link to="/report">REPORT</Link></li>                     
          </ul>
          <ul className="contribute">
            {!user && <li><Link to="/login">ADMIN LOGIN</Link></li>}        
            {user && <li className='auth-links' onClick={logout}>LOGOUT</li>}                                 
          </ul>
        </div>
        <div className="mobile-footer-container">
          <ul>
            <li><Link to="/news">NEWS </Link></li>           
          </ul>
          <ul>
            <li><Link to="/divisions">DIVISIONS</Link></li>            
          </ul>          
          <ul>
            {!user && <li><Link to="/login"> ADMIN LOGIN</Link></li>}        
            {user && <li onClick={logout}>LOGOUT</li>}                    
          </ul>
        </div>
      </div>
    </div>
  )
}
