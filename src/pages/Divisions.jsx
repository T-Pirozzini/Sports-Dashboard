import { useState } from 'react'
import { useCollection } from '../hooks/useCollection'

// images
import landlubber from "../assets/landlubber.png"
import longwood from "../assets/longwood.png"
import quarterway from "../assets/Quarterway.png"
import white_sails from "../assets/white-sails.png"

// components
import EntryForm from '../components/EntryForm'
import LandlubberA from '../components/LandlubberA'
import LandlubberB from '../components/LandlubberB'

// styles
import './Divisions.css'

export default function Divisions() {
  const { documents: landlubberA } = useCollection('landlubberA')
  const { documents: landlubberB } = useCollection('landlubberB')
  const [selected, setSelected] = useState('unselected')
  console.log('ENTRIES', landlubberA)
  
  const handleClick = (e) => {  
    e.currentTarget.classList.toggle('selected')     
  }

  return (
    <div>
      <div className="container-main" >
        <div className="division-container">
          <div className={selected} onClick={(e) => handleClick(e)} >
            <img src={landlubber}></img>
            <p>LANDLUBBER PUB DIVISION (REC)</p>            
          </div>
         <div className='quarterway' onClick={(e) => handleClick(e)}>
            <img src={quarterway}></img>
            <p>QUARTERWAY PUB DIVISION (30+)</p>                       
          </div>
          <div className='longwood' onClick={(e) => handleClick(e)}>
            <img src={longwood}></img>
            <p>LONGWOOD BREW PUB DIVISION (45+)</p>
          </div>
          <div className='white-sails' onClick={(e) => handleClick(e)}>
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
              {landlubberA && <LandlubberA
              landlubberA={landlubberA}
               />} 
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
              {landlubberB && <LandlubberB
              landlubberB={landlubberB}
               />} 
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
            <EntryForm />
          </div>
        </div>      
      </div>
  )
}
