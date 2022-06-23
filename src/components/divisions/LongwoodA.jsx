import React from 'react'

// firebase imports
import { db } from '../../firebase/config'
import { doc, deleteDoc } from 'firebase/firestore'

export default function LongwoodA({ longwoodA }) {  

 const handleClick = async (id) => {
  const docRef = doc(db, 'longwoodA', id)
  await deleteDoc(docRef)
}
 
  return (
    <> 
      {longwoodA.map(long => (        
        <tr key={long.id} onClick={() => handleClick(long.id)}>
          <td>{long.team}</td>
          <td>{long.rep}</td>
          <td>{long.cell}</td>
          <td>{long.email}</td>          
        </tr>               
      ))}     
    </>
  )
}
