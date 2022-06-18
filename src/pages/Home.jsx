import React from 'react'

// images
import latest_news from "../assets/latest-news.jpeg"
import divisions from "../assets/divisions.jpeg"
import league_society from "../assets/league-society.jpeg"

// components
import Navbar from "../components/Navbar"

// styles
import "./Home.css"

export default function Home() {
  return (
    <div className="main-container">
      <Navbar />
      <div className="background">
        <div className="home-title">        
        <div>Keeping active in Hockey</div>
        <div>It's what we do!</div>          
        </div>
      </div>

      {/* image links */}
      <div className="img-container">
        <div className="latest-news">
          <img src={latest_news} alt="Latest News" className="latest-news-img"/>
          <div className="img-text">Latest News</div>          
        </div>        
        <div className="divisions">
          <img src={divisions} alt="Divisions" className="divisions-img" />
          <div className="img-text">Divisions</div>
          <p>CLICK HERE TO ACCESS ALL DIVISIONS</p>
        </div>        
        <div className="league-society">
          <img src={league_society} alt="League & Society" className="league-society-img" />
          <div className="league-society-text">League & Society</div>
          <p>CONSTITUTION, BYLAWS & OTHER GENERAL INFORMATION</p>
        </div>        
      </div>

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
