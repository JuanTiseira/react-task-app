import React, {useRef} from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../../../models/contact.class';

export const RegisterForm = ({add}) => {

    const nameRef = useRef('');
    const apellidoRef = useRef('');
    const emailRef = useRef('');


    function addContact(e){
      e.preventDefault();
      const newContact = new Contact
      (
        nameRef.current.value,
        apellidoRef.current.value,
        emailRef.current.value,
        false,
        );
        add(newContact);
    }
    const inputStyle = {
      marginInline:'10px',
      marginBlock: '10px',
      borderRadius:'20px',
      padding:'10px'
      
    }
    const titleStyle = {
      marginBlock: '10px',
      padding:'10px',
      color:'black'
      
    }
    const divStyle = {
      marginBlock: '10px',
      padding:'10px',
      borderColor:'black'
      
    }
    return (
    <div style={divStyle}>
      <h1 style={titleStyle}>Registrar contacto</h1>
      <form onSubmit={addContact}>
        <div style={{justifyContent:'center', alignItems:'center',display:'flex'}}>
          <label style = {inputStyle} htmlFor="inputName">Nombre</label>
          <input style = {inputStyle} ref={nameRef} type="text" id = "inputName" required/>
        
          <label style = {inputStyle} htmlFor="inputApellido">Apellido</label>
          <input style = {inputStyle} ref={apellidoRef} type="text" id = "inputApellido" required />
        
          <label style = {inputStyle} htmlFor="inputEmail">Email</label>
          <input style = {inputStyle} ref={emailRef} type="text" id = "inputEmail" required/>
        </div>
        <button type='submit' style={{marginBlock: '10px' ,width:'100px',borderColor:'transparent',marginInline:'10px',background:'#047af3', color: 'white', padding:'10px', borderRadius:'20px', width:'200px'}}>Add</button>

      </form>
    </div>
  )
}
RegisterForm.propTypes = {
  add: PropTypes.func.isRequired

}
