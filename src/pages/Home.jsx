import React from 'react'


// components
import Navbar from "../components/Navbar"

// styles
import "./Home.css"

export default function Home() {
  return (
    <div className="main-container">
      <Navbar />
      <div className="home-title">        
        <div>Keeping active in Hockey</div>
        <div>It's what we do!</div>          
      </div>
      
    </div>
    
  )
}
