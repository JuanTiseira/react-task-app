import React, {useEffect}from 'react'

export const Allcycles = () => {
  
  
    useEffect(() => {
        
        console.log('componente creado')
        
        const intervalID = setInterval(() => {
            console.log('actualizacion del componente')
            document.title = `${new Date()}`
        }, 1000);

        return  () => {
            console.log('componente va a desaparecer');
            document.title = "Tiempo detenido"
            clearInterval(intervalID);
        }
    }, []);
    
    return (
    <div><h1>allcycles</h1></div>
  )
}
