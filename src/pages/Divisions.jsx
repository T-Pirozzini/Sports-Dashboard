import { useState, useRef } from 'react'
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
import LongwoodA from '../components/divisions/LongwoodA'
import LongwoodB from '../components/divisions/LongwoodB'
import WhitesailsA from '../components/divisions/WhitesailsA'
import WhitesailsB from '../components/divisions/WhitesailsB'

// styles
import './Divisions.css'

// context
import { useAuthContext } from '../hooks/useAuthContext'

export default function Divisions() {
  const { documents: landlubberA } = useCollection('landlubberA')
  const { documents: landlubberB } = useCollection('landlubberB')
  const { documents: quarterwayA } = useCollection('quarterwayA')
  const { documents: quarterwayB } = useCollection('quarterwayB')
  const { documents: longwoodA } = useCollection('longwoodA')
  const { documents: longwoodB } = useCollection('longwoodB')
  const { documents: whitesailsA } = useCollection('whitesailsA')
  const { documents: whitesailsB } = useCollection('whitesailsB')
  
  const [division, setDivision] = useState('landlubber')
  const { user, authIsReady } = useAuthContext;  

  let unselected = document.querySelectorAll('.division-container > div')

  const handleClick = (e) => {
    console.log('unselected', unselected)
    let arr = Array.from(unselected)
    arr.map(x => {
      x.classList.remove('selected')
    })         
    e.currentTarget.classList.add('selected')        
    
    let num = e.currentTarget.className[0]
    if (num == 1) {
      setDivision('landlubber')      
    }
    if (num == 2) {
      setDivision('quarterway')        
    }
    if (num == 3) {
      setDivision('longwood')        
    }
    if (num == 4) {
      setDivision('whitesails')        
    }   
  }

  return (
    <div>
      <div className="container-main" >
        <div className="division-container">
          <div className='1 selected' onClick={(e) => handleClick(e)} >
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
          {/* landlubber tables */}                         
          {division === 'landlubber' && <table className='landlubber-table'>                        
            <caption>{division.toUpperCase()} DIVISION</caption>
            <tbody>               
              <tr>
                <th className="rec">REC A</th>        
              </tr>
              <tr>
                <th>Team</th>
                <th>Team Rep</th>
                <th>Contact #</th>
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
                <th>Contact #</th>
                <th>Email</th>
              </tr>
              {landlubberB && <LandlubberB
              landlubberB={landlubberB}
               />}              
            </tbody>
          </table>}

          {/* quarterway tables */}
          {division === 'quarterway' && <table className='quarterway-table'>
            <caption>{division.toUpperCase()} DIVISION</caption>
            <tbody>
              <tr>
                <th className="rec">REC A</th>        
              </tr>
              <tr>
                <th>Team</th>
                <th>Team Rep</th>
                <th>Contact #</th>
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
                <th>Contact #</th>
                <th>Email</th>
              </tr>
              {quarterwayB && <QuarterwayB
              quarterwayB={quarterwayB}
               />}              
            </tbody>
          </table>}

          {/* longwood tables */}
          {division === 'longwood' && <table className='longwood-table'>
            <caption>{division.toUpperCase()} DIVISION</caption>
            <tbody>
              <tr>
                <th className="rec">REC A</th>        
              </tr>
              <tr>
                <th>Team</th>
                <th>Team Rep</th>
                <th>Contact #</th>
                <th>Email</th>
              </tr>
              {longwoodA && <LongwoodA
              longwoodA={longwoodA}
               />}              
            </tbody>
          </table>}          
          {division === 'longwood' && <table className='longwood-table'>
            <tbody>
              <tr>
                <th className="rec">REC B</th>        
              </tr>
              <tr>
                <th>Team</th>
                <th>Team Rep</th>
                <th>Contact #</th>
                <th>Email</th>
              </tr>
              {longwoodB && <LongwoodB
              longwoodB={longwoodB}
               />}              
            </tbody>
          </table>}

          {/* whitesails tables */}
          {division === 'whitesails' && <table className='whitesails-table'>
            <caption>{division.toUpperCase()} DIVISION</caption>
            <tbody>
              <tr>
                <th className="rec">REC A</th>        
              </tr>
              <tr>
                <th>Team</th>
                <th>Team Rep</th>
                <th>Contact #</th>
                <th>Email</th>
              </tr>
              {whitesailsA && <WhitesailsA
              whitesailsA={whitesailsA}
               />}              
            </tbody>
          </table>}           
          {division === 'whitesails' && <table className='whitesails-table'>
            <tbody>
              <tr>
                <th className="rec">REC B</th>        
              </tr>
              <tr>
                <th>Team</th>
                <th>Team Rep</th>
                <th>Contact #</th>
                <th>Email</th>
              </tr>
              {whitesailsB && <WhitesailsB
              whitesailsB={whitesailsB}
               />}              
            </tbody>
          </table>}

          <EntryForm division = {division} />
          </div>
        </div>      
      </div>
  )
}
