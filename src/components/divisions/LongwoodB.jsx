import React from 'react'

// firebase imports
import { db } from '../../firebase/config'
import { doc, deleteDoc } from 'firebase/firestore'

export default function LongwoodB({ longwoodB }) {  

 const handleClick = async (id) => {
  const docRef = doc(db, 'longwoodB', id)
  await deleteDoc(docRef)
}
 
  return (
    <> 
      {longwoodB.map(long => (        
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
