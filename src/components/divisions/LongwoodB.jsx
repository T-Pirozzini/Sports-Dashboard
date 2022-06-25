import React from 'react'
import { BsTrash } from 'react-icons/bs'

// firebase imports
import { db } from '../../firebase/config'
import { doc, deleteDoc } from 'firebase/firestore'

// context
import { useAuthContext } from '../../hooks/useAuthContext'

export default function LongwoodB({ longwoodB }) {
  const { user } = useAuthContext();  

 const handleClick = async (id) => {
  const docRef = doc(db, 'longwoodB', id)
  await deleteDoc(docRef)
}
 
  return (
    <> 
      {longwoodB.map(long => (        
        <tr>
          <td>{long.team}</td>
          <td>{long.rep}</td>
          <td>{long.cell}</td>
          <td>{long.email}</td>
          {user && <div className="trash" key={long.id} onClick={() => handleClick(long.id)}><BsTrash /></div>}          
        </tr>               
      ))}     
    </>
  )
}
