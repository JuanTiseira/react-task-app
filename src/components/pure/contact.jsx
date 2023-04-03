import React from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../../models/contact.class'

function ContactComponent ({ contact, conected, remove }) {
  
  


  function contactConectedIcon(){
    if(contact.conectado){
        //en el evento onclick del icono de completitud pasamos la funcion que 
        //el padre pasa por props y le pasamos la tarea
        return (<i onClick={() => conected(contact)} className='bi-toggle-on m-3 task-action' style={{color: 'green'}}></i>)
    }else{
        return  (<i onClick={() => conected(contact)} className='bi-toggle-off m-3 task-action' style={{color: 'green'}}></i>)
    }
}

  return (
      <tr >
        <td>
          {contact.name}
        </td>
        <td >
          {contact.apellido}
        </td>
        <td>
          {contact.email}
        </td>
        <td>
        {contactConectedIcon()}
        
        <i onClick={() => remove(contact)} className='bi-trash task-action' style={{color: 'tomato'}}></i>
        </td>
      </tr> 
  )
}

ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact),
    conected: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
}

export default ContactComponent
