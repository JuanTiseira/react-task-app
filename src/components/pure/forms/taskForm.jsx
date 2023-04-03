
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

const TaskForm = ({add}) => {
  
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
  
  return (
    <form onSubmit={addTask} style={{justifyContent: 'center', alignItems: 'center', marginBlock: '100px'}}>
      <div className='form-outline flex-fill' style={{borderRadius:'10px', marginBlock:'50px'}}>
        <label htmlFor="inputName" >Name</label>
        <input type="text" ref={nameRef} id = 'inputName' style={{marginInline:'10px', padding:'10px', borderRadius:'20px'}} />
        <label htmlFor="inputDescription" >Description</label>
        
        <input type="text" ref={descriptionRef} id = 'inputDescription' style={{marginInline:'10px', padding:'10px', borderRadius:'20px'}} />
        
        <label htmlFor="selectLevel" >Priority</label>
        <select id='selectLevel' ref={levelRef} defaultValue={LEVELS.NORMAL}  style={{marginInline:'10px', padding:'10px', borderRadius:'20px', marginBlock: '50px'}}>
          <option value={LEVELS.NORMAL}>Normal</option>
          <option value={LEVELS.URGENT}>Urgent</option>   
          <option value={LEVELS.BLOCKING}>Blocking</option>   
        </select>
      </div>
      <button type='submit' style={{width:'100px',borderColor:'transparent',marginInline:'10px',background:'#047af3', color: 'white', padding:'10px', borderRadius:'20px'}}>Add</button>
    </form>
  )
}

TaskForm.propTypes = {
  add: PropTypes.func.isRequired

}
export default TaskForm;