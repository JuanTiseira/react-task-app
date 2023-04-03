/**
 * componente que va a contener un formulario para autenticacion de usuarios
 */


import React, {useState} from 'react'

export const loginForm = () => {
  
    const initialCredencials = [{
            user: '',
            password: ''
        }
    ];

    const [credencials, setCredencials] = useState(initialCredencials);
    
    
    return (
        <div>loginForm</div>
  )
}
