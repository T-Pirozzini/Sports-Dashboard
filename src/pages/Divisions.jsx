import { useState } from 'react'
import { useCollection } from '../hooks/useCollection'

// images
import landlubber from "../assets/landlubber.png"
import longwood from "../assets/longwood.png"
import quarterway from "../assets/Quarterway.png"
import white_sails from "../assets/white-sails.png"

// components
import EntryForm from '../components/EntryForm'

// divisions
import LandlubberA from '../components/divisions/LandlubberA'
import LandlubberB from '../components/divisions/LandlubberB'
import QuarterwayA from '../components/divisions/QuarterwayA'
import QuarterwayB from '../components/divisions/QuarterwayB'

// styles
import './Divisions.css'

export default function Divisions() {
  const { documents: landlubberA } = useCollection('landlubberA')
  const { documents: landlubberB } = useCollection('landlubberB')
  const { documents: quarterwayA } = useCollection('landlubberA')
  const { documents: quarterwayB } = useCollection('landlubberB')
  const [selected, setSelected] = useState(1)
  const [division, setDivision] = useState('')  
  
  const handleClick = (e) => { 
    console.log('CurrentName', e.currentTarget.className[0])     
    e.currentTarget.classList.toggle('selected')    
    setSelected(e.currentTarget.className[0])
    console.log('SELECTED', selected)
    if (selected == 1) {
      setDivision('landlubber')  
    }
    if (selected == 2) {
      setDivision('quarterway')  
    }
    if (selected == 3) {
      setDivision('longwood')  
    }
    if (selected == 4) {
      setDivision('white sails')  
    }    
    console.log('DIVISION', division)
  }

  return (
    <div>
      <div className="container-main" >
        <div className="division-container">
          <div className='1' onClick={(e) => handleClick(e)} >
            <img src={landlubber}></img>
            <p>LANDLUBBER PUB DIVISION (REC)</p>            
          </div>
         <div className='2' onClick={(e) => handleClick(e)}>
            <img src={quarterway}></img>
            <p>QUARTERWAY PUB DIVISION (30+)</p>                       
          </div>
          <div className='3' onClick={(e) => handleClick(e)}>
            <img src={longwood}></img>
            <p>LONGWOOD BREW PUB DIVISION (45+)</p>
          </div>
          <div className='4' onClick={(e) => handleClick(e)}>
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
        
          {division === 'landlubber' && <table className='landlubber-table'>
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

          {division === 'quarterway' && <table className='quarterway-table'>
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
              {quarterwayA && <QuarterwayA
              quarterwayA={quarterwayA}
               />}              
            </tbody>
          </table>} 

          {division === 'quarterway' && <table className='quarterway-table'>
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
              {quarterwayB && <QuarterwayB
              quarterwayB={quarterwayB}
               />}              
            </tbody>
          </table>}                               
          <EntryForm division = {division} />
          </div>
        </div>      
      </div>
  )
}
