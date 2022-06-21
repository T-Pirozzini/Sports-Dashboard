import React from 'react'

// images
import latest_news from "../assets/latest-news.jpeg"
import divisions from "../assets/divisions.jpeg"
import league_society from "../assets/league-society.jpeg"

// styles
import './ImageLinks.css'

export default function ImageLinks() {  

  return (
    <div>
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
    </div>
  )
}
