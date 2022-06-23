import React from 'react'

// firebase imports
import { db } from '../../firebase/config'
import { doc, deleteDoc } from 'firebase/firestore'

export default function WhitesailsA({ whitesailsA }) {  

 const handleClick = async (id) => {
  const docRef = doc(db, 'whitesailsA', id)
  await deleteDoc(docRef)
}
 
  return (
    <> 
      {whitesailsA.map(white => (        
        <tr key={white.id} onClick={() => handleClick(white.id)}>
          <td>{white.team}</td>
          <td>{white.rep}</td>
          <td>{white.cell}</td>
          <td>{white.email}</td>          
        </tr>               
      ))}     
    </>
  )
}
