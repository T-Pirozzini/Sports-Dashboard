import React from 'react'

import "./Report.css"

export default function Report() {
  return (
    <div>
      <form className='report-container'>
        <h1>Report</h1>
        <p>This form is for the purpose of reporting any complaints/suggestions or incidents that may occur in a game. These can include, officiating, rink conditions, unfair or aggressive play etc. The report will go to the league executive for its consideration. please leave your name and email if you want to receive a response.</p>
        <div className="report-info">
          <label for="date">Date: </label>
          <input type="date"></input>
          <label for="name">Name: </label>
          <input id='name' type="text" placeholeder="enter your name"></input>
          <label for="email">Email: </label>
          <input id="email" type="email"></input>
        </div>
        <div className="report-message">
          <label for="subject">Subject: </label>
          <input id="subject" type="text"></input>
          <label for="comments">Comments: </label>
          <input id="comments" type="text"></input>
        </div>
        <button className='form-btn'>Submit</button>
      </form>
    </div>
  )
}
