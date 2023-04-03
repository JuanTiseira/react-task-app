import React, {useRef} from 'react'

export const Child = ({ name, send, update }) => {
    const messageRef = useRef('');
    const nameRef = useRef('');

    function pressButton (){
        const text = messageRef.current.value;
        alert(`text in input ${text}`)

    }
    function pressButtonParams(text){
        alert(`text: ${text}`)
    }
    
    function submitForm(e){
        e.preventDefault();
        update(nameRef.current.value)
    }

    return (
    <div style={{background: 'white', padding: '30px', margin: '50px', marginBlock:'50px', marginInline:'100px', borderRadius:'10px'}}>

        <h1 
        style={{borderColor:'transparent', color:'black', marginBlock:'50px', }}
        onMouseOver={() => console.log('on mouse over')}>Hello {name}</h1>
        <button
        style={{borderColor:'transparent', marginInline:'10px',background:'#047af3', color: 'white', padding:'10px', borderRadius:'20px'}}
        onClick={() => console.log("boton 1 pulsado")}>boton1</button>
        
        <button 
        style={{borderColor:'transparent',marginInline:'10px',background:'#047af3', color: 'white', padding:'10px', borderRadius:'20px'}}
        onClick={pressButton}>boton2</button>
        {/* para passar parametros a una funcion se debe hacer asi */}
        <button 
        style={{borderColor:'transparent',marginInline:'10px',background:'#047af3', color: 'white', padding:'10px', borderRadius:'20px'}}
        onClick={() => pressButtonParams('hello')}>boton3</button>

        <input 
        style={{marginInline:'10px', padding:'10px', borderRadius:'20px'}}
        ref = {messageRef}
        placeholder='send a text to parent ' 
        onFocus={() => console.log('on focus')} 
        onChange={(e) => console.log("input changed", e.target.value)}/>
        
        <button style={{borderColor:'transparent',marginInline:'10px',background:'#047af3', color: 'white', padding:'10px', borderRadius:'20px'}}
        onClick={() => send(messageRef.current.value)}>Send message</button>

        <div style={{marginTop: '20px'}}>
            <form onSubmit={submitForm}>
                <input ref = {nameRef} placeholder = 'New Name' type="text" style={{marginInline:'10px', padding:'10px', borderRadius:'20px'}}/>
                <button type='submit' style={{borderColor:'transparent',marginInline:'10px',background:'#047af3', color: 'white', padding:'10px', borderRadius:'20px'}}>Updating</button>
            </form>
        </div>
    </div>
  )
}
