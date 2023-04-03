import React, { useState } from 'react'
// definiendo estilos en constantes


//estilo user logueado
const loggedStyle = {
    color: 'white'
}

//estilo usuario no logueado
const unloggedStyle = {
    color: 'tomato',
    fontWeight: 'bold'
}


export const GreetingStyled = (props) => {
//generamos un estado para el componente y asi controlar 
//si el uisuario esta o no logueado


    const [logged, setLogged] = useState(false);
    const greetingUser = () => (<p>hola, {props.name}</p>);
    const pleaseLogin = () => (<p>please login</p>)
    return (
    //definimos los estilos con operadores ternarios y el atributo style 
    <div style={logged ? loggedStyle : unloggedStyle}>
        {logged ? 
            (<p>hola, {props.name}</p>)
            :
            (<p>please login</p>)
        }
        
        <button onClick={() => {
            console.log('boton pulsado');
            setLogged(!logged);
        }}>{logged ? 'logout' : 'login'}</button>
    </div>
  )
}

export default GreetingStyled;