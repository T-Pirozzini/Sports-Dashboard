import React from 'react'

// firebase imports
import { db } from '../firebase/config'
import { doc, deleteDoc } from 'firebase/firestore'

export default function EntryList({ entries }) {
 console.log('Entries', entries)

 const handleClick = async (id) => {
  const docRef = doc(db, 'divisions', id)
  await deleteDoc(docRef)
}
 
  return (
    <> 
      {entries.map(entry => (        
        <tr key={entry.id} onClick={() => handleClick(entry.id)}>
          <td>{entry.team}</td>
          <td>{entry.rep}</td>
          <td>{entry.cell}</td>
          <td>{entry.email}</td>          
        </tr>               
      ))}     
    </>
  )
}
