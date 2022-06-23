import React from 'react'

// firebase imports
import { db } from '../../firebase/config'
import { doc, deleteDoc } from 'firebase/firestore'

export default function WhitesailsB({ whitesailsB }) {  

 const handleClick = async (id) => {
  const docRef = doc(db, 'whitesailsB', id)
  await deleteDoc(docRef)
}
 
  return (
    <> 
      {whitesailsB.map(white => (        
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
