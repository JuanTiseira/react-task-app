
/**
 * useRef() es un hook que permite la manipulación directa de 
 * elementos del DOM. useRef no usa el virtual DOM de react. 
 * Para enlazar useRef a un elemento HTML, dicho elemento 
 * debe tener la propiedad ref con el valor de la variable de referencia. 
 * useRef siempre regresa un objeto mutable con una única propiedad current .
 */

import React, {useRef} from 'react'
import PropTypes from 'prop-types';
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';

const TaskForm = ({add, length}) => {
  
  const nameRef = useRef('');
  const descriptionRef = useRef('');
  const levelRef = useRef(LEVELS.NORMAL);

  function addTask(e){
    e.preventDefault();
    const newTask = new Task
    (
      nameRef.current.value,
      descriptionRef.current.value,
      false,
      levelRef.current.value
      );
      add(newTask);
  }
  const inputStyle = {
    padding:'10px', 
    borderRadius:'20px'
  }
  return (
    <form onSubmit={addTask} >
      <div className='form-outline flex-fill' 
        style={{justifyContent: 'center', 
        alignItems: 'center', display:'block'}}>
        
          
        <div className='row' style={{margin:'20px'}}>
          <div className='col-sm-12' >
            <label htmlFor="inputName" style={{fontWeight:'bold', fontSize:'25px'}}>Name</label>
          </div>
          <div className='col-sm-12'>
            <input type="text" 
            ref={nameRef} id = 'inputName' 
            style={inputStyle}/>
          </div>
        </div>

        <div className='row'  style={{margin:'20px'}}>
          <div className='col-sm-12'>
            <label htmlFor="inputDescription" 
              style={{
                fontWeight:'bold', 
                fontSize:'25px'}}>
                  Description
            </label>
          </div>
          <div className='col-sm-12'>
            <input type="text" 
              ref={descriptionRef} 
              id = 'inputDescription' 

              style={inputStyle} />
          </div>
        </div>

        <div className='row' 
          style={{
          justifyContent: 'center', 
          alignItems: 'center',
          margin:'20px'}}>

          <div className='col-sm-12'>
            {/* <label htmlFor="selectLevel" 

              style={{
                fontWeight:'bold', 
                fontSize:'25px'}}>

                  Priority

            </label> */}
          </div>
          <div className='col-sm-12'>
            <select id='selectLevel' 
              ref={levelRef} 
              defaultValue={LEVELS.NORMAL}  
              style={{ 
                padding:'10px', 
                borderRadius:'20px',
                margin:'5px'}}>

              <option value={LEVELS.NORMAL}>Normal</option>
              <option value={LEVELS.URGENT}>Urgent</option>   
              <option value={LEVELS.BLOCKING}>Blocking</option>   
            </select>
          </div>
        </div>
        <button 
        type='submit' 
        style={{
            width:'100px',
            borderColor:'transparent',
            marginInline:'10px',
            background:'#047af3', 
            color: 'white', 
            padding:'10px', 
            borderRadius:'20px'}}>
            {length > 0 ? 'Add Task':'Create your first Task'}
              

      </button>
      </div>
      
    </form>
  )
}

TaskForm.propTypes = {
  add: PropTypes.func.isRequired,
  length: PropTypes.number.isRequired,

}
export default TaskForm;