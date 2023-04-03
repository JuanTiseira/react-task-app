/**
 * Ejemplo de uso de 
 * useState()
 * useRef()
 * useEfect()
 * 
 */

import React, {useEffect, useRef, useState} from 'react'

const Ejemplo2 = () => {

    //vamos a crear dos contadores distintos
    //cada uno en un estado diferente

    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);
    
    //vamos a crear una referencia con useRef() para asosicar una variable con un elemento del DOM del componente(vista html)
    
    const miRef = useRef();

    function incremetnar1(){
        setContador1(contador1 + 1);
    }
    function incremetnar2(){
        setContador2(contador2 + 1);

    }
    /**
     * trabando con useEfect()
     * caso1 ejecutar siempre un snippet de codigo
     * cada vez que haya un cambio en el estado del componente
     * se ejecuta aquello que este dentro del useEffect()
     */
    
    // useEffect(() => {
        
    
    //     console.log('cambio en el estado del componente')
    //     console.log('mostrando referencia a elemento del dom')
    //     console.log(miRef);
    // });
    /**
     * caso 2 ejecutar solo cuando cambia contador 1
     * cada vez que haya un cambio en contador 1 se ejecuta lo que diga el use efect
     * en caso de que cambie contador 2 no habra ejecucion
     * 
     */

    // useEffect(() => {
        
    //     console.log('cambio en el estado de contador 1')
    //     console.log('mostrando referencia a elemento del dom')
    //     console.log(miRef);
    // }, [contador1]);

    /**
     * caso 3 ejecutar solo cuando cambie contador 1 o contador 2
     * cada vez que haya un cambio en contador 1 o 2 se ejecuta lo que diga el use efect
     * en caso de que cambie contador 2 no habra ejecucion
     * 
     */

    useEffect(() => {
        
        console.log('cambio en el estado de contador 1 o contador 2')
        console.log('mostrando referencia a elemento del dom')
        console.log(miRef);
    }, [contador1, contador2]);

    return (
        <div>
            <h1>Ejemplo de useState, useRef, useEffect</h1>
            <h2>Contador 1: {contador1}</h2>
            <h2>Contador 2: {contador2}</h2>
            {/* elemento referenciado */}
            <h4 ref={miRef}>
                ejemplo de elemento referenciado
            </h4>
            {/* botones para cambiar los contadores */}
            <div>
                <button onClick={incremetnar1}>incrementar 1</button>
                <button onClick={incremetnar2}>incrementar 2</button>

            </div>
        </div>
  )
}

export default Ejemplo2