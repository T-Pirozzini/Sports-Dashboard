import React from 'react'
import { Link } from 'react-router-dom'

// styles
import './Footer.css'

export default function Footer() {
  return (
    <div>
      {/* footer */}
      <div className="footer-main">
        <div className="footer-container">
          <ul className="about-footer">            
            <li>NEWS</li>
            <li>RULES/REGULATIONS</li>            
          </ul>
          <ul className="divisions-footer">
            <li>DIVISIONS</li>
            <li>STANDINGS</li>            
          </ul>
          <ul className="league-society">
            <li>REFEREE</li>
            <li>REPORT</li>                     
          </ul>
          <ul className="contribute">
            <li>ADMIN LOGIN</li>                                
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
            <li><Link to="/report">LOGIN</Link></li>                    
          </ul>
        </div>
      </div>
    </div>
  )
}
