import { useState } from 'react'

// firebase imports
import { db } from '../firebase/config'
import { collection, addDoc } from 'firebase/firestore'

export default function EntryForm() {
  const [ newRec, setNewRec] = useState(true)
  const [ newTeam, setNewTeam] = useState('')
  const [ newRep, setNewRep] = useState('')
  const [ newCell, setNewCell] = useState('')
  const [ newEmail, setNewEmail] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    await addDoc(collection(db, 'divisions'), {
      team: newTeam,
      rep: newRep,
      cell: newCell,
      email: newEmail,
      rec: newRec 
    })
    // reset form fields
    setNewRec(true)  
    setNewTeam('')
    setNewRep('')
    setNewCell('')
    setNewEmail('')   
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Add a new entry:</span>
        <select id='division' name='division'>
          <option value={true}>Rec A</option>
          <option value={false}>Rec B</option>
        </select>         
        <input
          required
          type='text'
          onChange={(e) => setNewTeam(e.target.value)}
          value={newTeam}
        />
        <input
          required
          type='text'
          onChange={(e) => setNewRep(e.target.value)}
          value={newRep}
        />
        <input
          required
          type='cell'
          onChange={(e) => setNewCell(e.target.value)}
          value={newCell}
        />
        <input
          required
          type='email'
          onChange={(e) => setNewEmail(e.target.value)}
          value={newEmail}
        />
      </label>
      <button>Add</button>
    </form>
  )
}
