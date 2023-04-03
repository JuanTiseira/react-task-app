/**
 * ejemplo de uso del metodo componentewillunmout y ejemplo de hooks
 *cuando el componente va a desaparecer
 */

 import React, { Component, useEffect } from 'react';
 
export class DidUnmount extends Component {
    componentWillUnmount(){
        console.log('comportamiento antes de que el componente desaparezca')
    }
    
    render() {
        return (
            <div>
                <h1>component will umount</h1>
            </div>
        );
    }
 }


import React from 'react'

export const DidUnmounthook = () => {
    useEffect(() => {
        //aqui nada
    
        return cleanUp = () => {
        console.log('comportamiento antes de que el componente desaparezca')
            
        }
    }, []);

    return (
    <div>
        <h1>component will umount</h1>
    </div>
  )
}
