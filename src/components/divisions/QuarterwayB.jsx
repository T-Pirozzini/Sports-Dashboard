import React from 'react'
import { BsTrash } from 'react-icons/bs'

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
        <tr>
          <td>{quarter.team}</td>
          <td>{quarter.rep}</td>
          <td>{quarter.cell}</td>
          <td>{quarter.email}</td>
          <div className="trash" key={quarter.id} onClick={() => handleClick(quarter.id)}><BsTrash /></div>          
        </tr>               
      ))}     
    </>
  )
}
