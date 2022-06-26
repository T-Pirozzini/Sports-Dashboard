import { useEffect, useState } from 'react'

// styles
import './EntryForm.css'

// firebase imports
import { db } from '../firebase/config'
import { collection, addDoc } from 'firebase/firestore'

export default function EntryForm({ division }) {  
  const [ newRec, setNewRec] = useState('A')
  const [ newTeam, setNewTeam] = useState('')
  const [ newRep, setNewRep] = useState('')
  const [ newCell, setNewCell] = useState('')
  const [ newEmail, setNewEmail] = useState('') 

  const handleSubmit = async (e) => {
    e.preventDefault()
    let strDivision = JSON.stringify(division)    
    let strNewRec = JSON.stringify(newRec)    
    let combined = strDivision.concat(strNewRec)
    let divisionRec = combined.replace(/['"]+/g, '')    
    if (newRec == 'A') {      
      await addDoc(collection(db, divisionRec), {
        team: newTeam,
        rep: newRep,
        cell: newCell,
        email: newEmail,
        rec: newRec 
      })
    }
    if (newRec == 'B') {      
      await addDoc(collection(db, divisionRec), {
        team: newTeam,
        rep: newRep,
        cell: newCell,
        email: newEmail,
        rec: newRec 
      })    
    }
    // reset form fields      
    setNewTeam('')
    setNewRep('')
    setNewCell('')
    setNewEmail('')
  }

  return (
    <form className="entry-form" onSubmit={handleSubmit}>        
      <select onChange={(e) => setNewRec(e.target.value)}>
        <option value='A'>REC A</option>
        <option value='B'>REC B</option>
      </select>
      <div className='entry-inputs'>        
        <input
          required
          placeholder='Team Name'
          type='text'
          onChange={(e) => setNewTeam(e.target.value)}
          value={newTeam}
        />
        <input
          required
          placeholder='Team Representative'
          type='text'
          onChange={(e) => setNewRep(e.target.value)}
          value={newRep}
        />
        <input
          required
          placeholder='Contact# (xxx) xxx-xxxx'
          type='cell'
          onChange={(e) => setNewCell(e.target.value)}
          value={newCell}
        />
        <input
          required
          placeholder='Email'
          type='email'
          onChange={(e) => setNewEmail(e.target.value)}
          value={newEmail}
        />
      </div> 
      <button>Add Team</button>
    </form>
  )
}
