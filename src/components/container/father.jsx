import React, { useState } from 'react'
import { Child } from '../pure/child'

export const Father = () => {
  // el padre tiene un estado pruivado que cambia al camnbiar se renderiiza de nuevio el componenet que tenga ese dato
  //en este caso vuelve a renderizar el child y  acutualiza el bloque que contiene ese dato
  const [name, setName] = useState('juani');
  //los props pueden ser datos funciones objetos
  //los eventos disparan las acciones y se puede declarar lo que hacen con fuinciones anonimas o 
  //crear funciones 
  function showMessage(text) {
    alert(`message received ${text}`)
  }
  function updateName(newName){
    setName(newName)
  }

  return (
    <div style={{background: '#f8f8f9', padding: '10px'}}><Child name={name} send={showMessage} update={updateName}></Child></div>
  )
}
