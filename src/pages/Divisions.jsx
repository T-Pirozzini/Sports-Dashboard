import { useState } from 'react'
import { useCollection } from '../hooks/useCollection'

// images
import landlubber from "../assets/landlubber.png"
import longwood from "../assets/longwood.png"
import quarterway from "../assets/Quarterway.png"
import white_sails from "../assets/white-sails.png"

// components
import EntryForm from '../components/EntryForm'
import LandlubberA from '../components/divisions/LandlubberA'
import LandlubberB from '../components/divisions/LandlubberB'

// styles
import './Divisions.css'

export default function Divisions() {
  const { documents: landlubberA } = useCollection('landlubberA')
  const { documents: landlubberB } = useCollection('landlubberB')
  const [selected, setSelected] = useState('unselected')
  const [division, setDivision] = useState('landlubber')  
  
  const handleClick = (e) => {      
    e.currentTarget.classList.toggle('selected')
    setDivision(e.currentTarget.className)         
  }

  return (
    <div>
      <div className="container-main" >
        <div className="division-container">
          <div className='landlubber' onClick={(e) => handleClick(e)} >
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
          {division === 'landlubber' && <table className='landlubber-table'>                        
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
            </tbody>               
          </table> }              
        
          {division === 'landlubber' && <table>
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
            </tbody>
          </table>}                                
          <EntryForm />
          </div>
        </div>      
      </div>
  )
}
