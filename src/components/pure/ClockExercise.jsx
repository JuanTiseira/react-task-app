/**
 * 
 * componente del ejercicio para las sesiones 4,5,6
 */


import React,{useState, useEffect} from 'react'

export const ClockExercise = () => {
    const edadInicial = 0;
    const initialData = [{
        nombre: '',
        apellido: '',
        fecha: new Date()
        }
    ];
    const [edad, setEdad] = useState(edadInicial);
    const [data, setData] = useState(initialData);
    
    
    useEffect(() => {
        
        console.log('componente creado')
        
        const intervalID = setInterval(() => {
            
            setData(
                {
                    nombre: 'Pepe',
                    apellido: 'pepe@gmail.com',
                    fecha: `${new Date().toLocaleTimeString()}`
                }
            )
            setEdad(edad + 1)
        }, 1000);

        return  () => {
            
            clearInterval(intervalID);
        }
    }, [data]);
    return (
    <div>
        <h2>
        Hora Actual:
        {data.fecha}
        </h2>
        <h3>{data.nombre} {data.apellido}</h3>
        <h1>Edad: {edad}</h1>
    </div>
  )
}
