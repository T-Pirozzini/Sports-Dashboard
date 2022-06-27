import React from 'react'
import { Link } from 'react-router-dom'

// images
import latest_news from "../assets/latest-news.jpeg"
import divisions from "../assets/divisions.jpeg"
import standings from "../assets/league-society.jpeg"

// styles
import './ImageLinks.css'

export default function ImageLinks() {  

  return (
    <div>
      {/* image links */}
      <div className='img-main'>
        <div className="img-container">
          <Link to="/news">        
          <div className="latest-news-div">          
            <img src={latest_news} alt="Latest News" className="latest-news-img"/>
            <div className="img-text">NEWS</div>
            <p>CLICK HERE FOR THE LATEST NEWS</p>          
          </div>
          </Link>
          <Link to="/divisions">                
          <div className="divisions-div">
            <img src={divisions} alt="Divisions" className="divisions-img" />
            <div className="img-text">DIVISIONS</div>
            <p>CLICK HERE TO ACCESS ALL DIVISIONS</p>
          </div>
          </Link> 
          <Link to="/standings">       
          <div className="league-society-div">
            <img src={standings} alt="standings" className="standings" />
            <div className="standings">STANDINGS</div>
            <p>CLICK HERE FOR THE CURRENT STANDINGS</p>
          </div>
          </Link>
        </div>        
      </div>
    </div>
  )
}
