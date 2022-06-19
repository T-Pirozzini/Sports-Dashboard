import React from 'react'


// components
import ImageLinks from "../components/ImageLinks"
import Footer from "../components/Footer"

// styles
import "./Home.css"

export default function Home() {
  return (
    <div className="main-container">      
      <div className="background">
        <div className="home-title">        
          <div>Keeping active in Hockey<br></br> It's what we do!</div>                 
        </div>
      </div>
      <ImageLinks />
      <Footer />      
    </div>
    
  )
}
