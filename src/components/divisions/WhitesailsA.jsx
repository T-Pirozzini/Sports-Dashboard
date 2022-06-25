import React from 'react'
import { BsTrash } from 'react-icons/bs'

// firebase imports
import { db } from '../../firebase/config'
import { doc, deleteDoc } from 'firebase/firestore'

// context
import { useAuthContext } from '../../hooks/useAuthContext'

export default function WhitesailsA({ whitesailsA }) {
  const { user } = useAuthContext();  

 const handleClick = async (id) => {
  const docRef = doc(db, 'whitesailsA', id)
  await deleteDoc(docRef)
}
 
  return (
    <> 
      {whitesailsA.map(white => (        
        <tr>
          <td>{white.team}</td>
          <td>{white.rep}</td>
          <td>{white.cell}</td>
          <td>{white.email}</td>
          {user && <div className="trash" key={white.id} onClick={() => handleClick(white.id)}><BsTrash /></div>}          
        </tr>               
      ))}     
    </>
  )
}
