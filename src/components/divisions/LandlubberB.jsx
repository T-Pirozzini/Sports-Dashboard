import React from 'react'
import { BsTrash } from 'react-icons/bs'

// firebase imports
import { db } from '../../firebase/config'
import { doc, deleteDoc } from 'firebase/firestore'

// context
import { useAuthContext } from '../../hooks/useAuthContext'

export default function LandlubberB({ landlubberB }) {
  const { user } = useAuthContext(); 

 const handleClick = async (id) => {
  const docRef = doc(db, 'landlubberB', id)
  await deleteDoc(docRef)
}
 
  return (
    <> 
      {landlubberB.map(lubber => (        
        <tr key={lubber.id}>
          <td>{lubber.team}</td>
          <td>{lubber.rep}</td>
          <td>{lubber.cell}</td>
          <td>{lubber.email}</td>
          {user && <div className="trash" key={lubber.id} onClick={() => handleClick(lubber.id)}><BsTrash /></div>}          
        </tr>               
      ))}     
    </>
  )
}
