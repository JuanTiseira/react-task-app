/**
 * Ejemplo de uso del metodo de ciclo de vida
 * en componente clase y el hook de ciclo de vida en componente funcional
 * 
 */

import React, { Component, useEffect } from 'react';

export class DIdMount extends Component {
    
    componentDidMount(){
        console.log('comportamiento antes de que el compoenente sea aniadido al dom')
    }

    render() {
        return (
            <div>
                <h1>Didmount</h1>
            </div>
        );
    }
}


export const DIdMountHook = () => {
    
    useEffect(() => {
        console.log('comportamiento antes de que el compoenente sea aniadido al dom')
    }, []);

    return (
        <div>
            <h1>Didmount</h1>
        </div>
  )
}
