/**
 * 
 * ejemplo de useContext
 * UseState()
 * useContext()
 * 
 * 
 */

import React, { useState, useContext } from 'react'


/**
 * 
 * @returns componente1
 * dispone de un contexto que va a tener un valor que recibe de un padre
 */
const miContexto = React.createContext(null)

const Componente1 = () => {
  //inicializamos un estado vacio que va a rellenarse con los datos del padre
  const state = useContext(miContexto)

  return (
    <div>
      <h1>
        El token es : {state.token}
      </h1>
      {/* pintamos el comp onente 2 */}
      <Componente2></Componente2>
    </div>
  )
}


const Componente2 = () => {
  
  const state = useContext(miContexto)
  
  return (
      <div>
        <h2>
          La sesion es : {state.sesion}
        </h2>
      </div>
    )
  }



export default function MiComponenteConContexto() {
  
  const estadoInicial = {
    token: '1234567',
    sesion: 1,
  }
  
  //creamos el estado de este componente
  const [sessionData, setSessionData] = useState(estadoInicial);

  function actualizarSesion(){
    setSessionData(
      {
        token:'jt123456789',
        sesion: sessionData.sesion + 1
      }
    )
  }


  return (
    <miContexto.Provider value={sessionData}> 
      {/* todo lo que esta aqui dentro puede leer los datos de sessiondata */}
      {/* ademas si se actualiza los componentes de aqui tambien lo actualizan */}
      <h1>Ejemplo de useState y useContext</h1>
      <Componente1></Componente1>
      <button onClick={actualizarSesion}>Actualizar Sesion</button>
    </miContexto.Provider>
  )
}