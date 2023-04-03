/**
 * ejemplo de uso de metodo componentDidUpdate en componente clase y uso de hook en componente funcional
 */

import React, { Component, useEffect } from 'react'

export class DidUpdate extends Component {
  
    componentDidUpdate(){
        console.log('comportameinto cuando el componente recibe nuevos props o cambio en su estado privado')
    }
    render() {
    return (
      <div>DidUpdate</div>
    )
  }
}

import React from 'react'

export const DidUpdateHook = () => {
  
    useEffect(() => {
        
        console.log('comportameinto cuando el componente recibe nuevos props o cambio en su estado privado')
           
    });

    return (
    <div>DidUpdate</div>
  )
}
