import React from 'react'

// images
import landlubber from "../assets/landlubber.png"
import longwood from "../assets/longwood.png"
import quarterway from "../assets/Quarterway.png"
import white_sails from "../assets/white-sails.png"


// styles
import './Divisions.css'

export default function Divisions() {

  const sayClick = (e) => {
    console.log("click")
    console.log(e.target.value)
  } 

  return (
    <div>
      <div className="container-main" >
        <div className="division-container" onClick={sayClick}>
          <div className="landlubber">
            <img src={landlubber}></img>
            <p>LANDLUBBER PUB DIVISION (REC)</p>
          </div>
          <div className="quarterway">
            <img src={quarterway}></img>
            <p>QUARTERWAY PUB DIVISION (30+)</p>
          </div>
          <div className="longwood">
            <img src={longwood}></img>
            <p>LONGWOOD BREW PUB DIVISION (45+)</p>
          </div>
          <div className="white-sails">
            <img src={white_sails}></img>         
            <p>WHITE SAILS BREWING DIVISION (55+)</p>
          </div>
        </div>
        <div className="table-container">                         
          <table>                        
            <tbody>               
              <tr>
                <th className="rec">REC A</th>        
              </tr>
              <tr>
                <th>Team</th>
                <th>Team Rep</th>
                <th>Cell</th>
                <th>Email</th>
              </tr>
              <tr>
                <td>Canadiens</td>
                <td>Mike Hrabowych</td>
                <td>(250)714-6101</td>
                <td>mike.hrabowych.com</td>
              </tr>
              <tr>
                <td>Crabbers</td>
                <td>Cole Maberley</td>
                <td>(517)888-7094</td>
                <td>cmaberley@rocketmail.com</td>
              </tr>
              <tr>
                <td>Crabbers</td>
                <td>Cole Maberley</td>
                <td>(517)888-7094</td>
                <td>cmaberley@rocketmail.com</td>
              </tr>
              <tr>
                <td>Crabbers</td>
                <td>Cole Maberley</td>
                <td>(517)888-7094</td>
                <td>cmaberley@rocketmail.com</td>
              </tr>
            </tbody>               
          </table>               
        
          <table>
            <tbody>
              <tr>
                <th className="rec">REC B</th>        
              </tr>
              <tr>
                <th>Team</th>
                <th>Team Rep</th>
                <th>Cell</th>
                <th>Email</th>
              </tr>
              <tr>
                <td>Crabbers</td>
                <td>Cole Maberley</td>
                <td>(517)888-7094</td>
                <td>cmaberley@rocketmail.com</td>
              </tr>
              <tr>
                <td>Crabbers</td>
                <td>Cole Maberley</td>
                <td>(517)888-7094</td>
                <td>cmaberley@rocketmail.com</td>
              </tr>
              <tr>
                <td>Crabbers</td>
                <td>Cole Maberley</td>
                <td>(517)888-7094</td>
                <td>cmaberley@rocketmail.com</td>
              </tr>
              <tr>
                <td>Crabbers</td>
                <td>Cole Maberley</td>
                <td>(517)888-7094</td>
                <td>cmaberley@rocketmail.com</td>
              </tr>
            </tbody>
          </table>                          
            
          </div>
        </div>      
      </div>
  )
}