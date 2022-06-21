import React from 'react'

// styles
import './Footer.css'

export default function Footer() {
  return (
    <div>
      {/* footer */}
      <div className="footer-container">
        <ul className="about-footer">
          <li>ABOUT</li>
          <li>LATEST NEWS</li>
          <li>CONTACT</li>
        </ul>
        <ul className="divisions-footer">
          <li>DIVISIONS</li>
          <li>LANDLUBBER PUB DIVISION - (REC DIVISION)</li>
          <li>QUARTERWAY PUB DIVISION - (30+ DIVISION)</li>
          <li>LONGWOOD PUB DIVISION - (45+ DIVISION)</li>
          <li>WHITE SAILS BREWING DIVISION - (55+ DIVISION)</li>
        </ul>
        <ul className="league-society">
          <li>LEAGUE & SOCIETY</li>
          <li>CONSTITUTION, BYLAWS, MINUTES & FINANCIALS</li>
          <li>REFEREES SECTION</li>
          <li>SUSPENSIONS</li>          
        </ul>
        <ul className="contribute">
          <li>WAYS TO CONTRIBUTE</li>
          <li>TEAM COMPLAINTS</li>
          <li>SUGGESTION REPORT</li>                    
        </ul>
      </div>
    </div>
  )
}
