import React from 'react'

// firebase imports
import { db } from '../../firebase/config'
import { doc, deleteDoc } from 'firebase/firestore'

export default function QuarterwayB({ quarterwayB }) {  

 const handleClick = async (id) => {
  const docRef = doc(db, 'quarterwayB', id)
  await deleteDoc(docRef)
}
 
  return (
    <> 
      {quarterwayB.map(quarter => (        
        <tr key={quarter.id} onClick={() => handleClick(quarter.id)}>
          <td>{quarter.team}</td>
          <td>{quarter.rep}</td>
          <td>{quarter.cell}</td>
          <td>{quarter.email}</td>          
        </tr>               
      ))}     
    </>
  )
}
