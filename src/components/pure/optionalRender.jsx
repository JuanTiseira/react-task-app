import React, { useState } from 'react'

//manejo de colores en variables
let red = 0;
let green = 200;
let blue = 150;

const loggedStyle = {
    backgroundColor: `rgb(${red},${green},${blue})`,
    color: 'white'
}

//estilo usuario no logueado
const unloggedStyle = {
    backgroundColor: 'tomato',

    color: 'white',
    fontWeight: 'bold'
}

//Login / logout buttons
const LoginButton = ({loginAction, propStyle}) => {
    return (
        <button style={propStyle} onClick={loginAction}>Login</button>
    )
}

const LogoutButton = ({logoutAction, propStyle}) => {
    return (
        <button style={propStyle} onClick={logoutAction}>Logout</button>
    )
}



// ? (expresion true) && expresion => se renderiza la expresion
// ? (expresion false) && expresion => no se renderiza la expresion 


const OptionalRender = () => {
    const [access, setAccess] = useState(true);
    const [nMessages, setNmessages] = useState(0);

    // const updateAccess = () => {
    //     setAccess(!access);

    // }
    
    const loginAction = () =>{
        setAccess(true)
    }

    const logoutAction = () =>{
        setAccess(false)
    }

    let optionalButton;
    // if(access) {
    //     optionalButton = <button onClick={updateAccess}> Logout </button>;
    // }else{
    //     optionalButton = <button onClick={updateAccess}> Login </button>;
    // }

    if(access) {
        optionalButton = <LogoutButton propStyle={unloggedStyle} logoutAction={logoutAction}></LogoutButton>
    }else{
        optionalButton = <LoginButton propStyle={loggedStyle} loginAction={loginAction}></LoginButton>
    }
    // Unread messages 
    let addMessages = () => {
        setNmessages(nMessages + 1)
    }
    return (
    <div>
        {/* optional button */}
        {optionalButton}
        {/* n mesages unread 
        solo se renderiza si se cumple la primera condicion
        */}
        {access ? (<div>
            {nMessages > 0 && nMessages === 1 && <p>You have {nMessages} new message...</p>}
        {nMessages > 1 && <p>You have {nMessages} new messages...</p>}
        {nMessages === 0 && <p>There are no new messages</p>}
        <button onClick={addMessages}>{nMessages === 0 ? 'add your first message':'add new Message'}</button>           
        </div>) : null}
        
    </div>
  )
}

export default OptionalRender