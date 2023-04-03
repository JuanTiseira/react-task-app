/**
 * Ejemplo de uso de hooks 
 * crear un componente de tipo funcion y acceder a su tipo de estado 
 * a traves de un hook ademas y poder modificarlo
 * 
 * 
 * 
 */
import React, {useState} from 'react'

const Ejemplo = () => {
    //valor inicial para contad
    
    const valorInicial = 0;
    const personaInicial ={
        nombre: 'Juani',
        email: 'jtiseira7@gmail.com'
    } 
    /**
     * queremos que el valorinicial y personainicial sean
     * parte del estado del componente para asi poder gestionar su cambio
     * y que este se vea reflejado  en la vista del componente
     * 
     * const [nombrevariable, funcionParaCambiar] = useState(valorInicial)
     */
    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);
    
    /**
     * funcion para actualizar el estado privado que tiene el contador
     */
    function incrementarContador(){
        //funcionparacambiar(nuevovalor)
        setContador(contador + 1);
    }
    /**
     * funcion para actualizar el estado de persona en el componente
     */
    function actualizarPersona(){
        setPersona(
            {
                nombre: 'Pepe',
                email: 'pepe@gmail.com'
            }
        )
    }
  
    return (
        <div>
            <h1>Ejemplo de useState</h1>
            <h2>Contador: {contador}</h2>
            <h2>Datos de la persona</h2>
            <h3>Nombre: {persona.nombre}</h3>
            <h4>Email: {persona.email}</h4>
            {/* bloque de botones para actualizar el estado */}
            <button onClick={incrementarContador}>Incrementar contador</button> 
            <button onClick={actualizarPersona}>Actualizar persona</button> 

        </div>
  )
}

export default Ejemplo;