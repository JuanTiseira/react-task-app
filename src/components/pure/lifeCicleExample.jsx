/**
 * Ejemplo de componente de tipo clase que dispone de los metodos de ciclo de vida 
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class lifeCicleExample extends Component {
    
    constructor(props) {
        super(props);
        console.log('CONSTRUCTOR cuando se instacncia el componente')
    }

    componentWillMount() {
        console.log('WillMount: antes del montaje del componente')
    }

    componentDidMount() {
        console.log('DidMount jusyo al momento del montaje antes de renderizarlo en la vista')
    }

    componentWillReceiveProps(nextProps) {  
        console.log('WillReceiveProps si va a recibir nuevas props')
    }

    shouldComponentUpdate(nextProps, nextState) {
        /** controlar si el componente debe o no actualizarse
         * 
         */
        //return true /false
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('WillUpdate justo antes de actualizarse')
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('WillUpdate justo despues de actualizarse')

    }

    componentWillUnmount() {
        console.log('justo antes de desaparecer')
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

lifeCicleExample.propTypes = {

};

export default lifeCicleExample;