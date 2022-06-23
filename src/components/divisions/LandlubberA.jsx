import React from 'react'

// firebase imports
import { db } from '../../firebase/config'
import { doc, deleteDoc } from 'firebase/firestore'

export default function LandlubberA({ landlubberA }) {  

 const handleClick = async (id) => {
  const docRef = doc(db, 'landlubberA', id)
  await deleteDoc(docRef)
}
 
  return (
    <> 
      {landlubberA.map(lubber => (        
        <tr key={lubber.id} onClick={() => handleClick(lubber.id)}>
          <td>{lubber.team}</td>
          <td>{lubber.rep}</td>
          <td>{lubber.cell}</td>
          <td>{lubber.email}</td>          
        </tr>               
      ))}     
    </>
  )
}
