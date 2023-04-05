import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
//importamos la hoja de estilos
import '../../styles/task.scss';
import { Task } from '../../models/task.class'
import { LEVELS } from '../../models/levels.enum';
//se declaran los props que va a recibir 
function TaskComponent ({ task, complete, remove }) {
    
    useEffect(() => {

        console.log('tarea creada')
    
        return () => {
            console.log(`task: ${task.name} is going to unmount` )
        }
    }, [task]);

    /**  funcion task level badge
    * function that returns a badge
    *depending on the level of the tasks
    */
    function taskLevelBadge(){
        switch (task.level) {
            case LEVELS.NORMAL:
                
                return(
                <h6 className='mb-0'>
                    <span className='badge bg-primary'>
                        {task.level}
                    </span>
                </h6>
                );
            case LEVELS.URGENT:  
                return(
                <h6 className='mb-0'>
                    <span className='badge bg-warning'>
                        {task.level}
                    </span>
                </h6>
                );
            case LEVELS.BLOCKING:  
                return(
                <h6 className='mb-0'>
                    <span className='badge bg-danger'>
                        {task.level}
                    </span>
                </h6>
                );
            default:
                break;
        }
    }
    /**
     * 
     * @returns function that retunr icon depending on completion of the task
     */
    function taskCompletedIcon(){
        if(task.completed){
            //en el evento onclick del icono de completitud pasamos la funcion que 
            //el padre pasa por props y le pasamos la tarea
            return (<i onClick={() => complete(task)} 
                        className='bi-toggle-on m-3 task-action' 
                        style={{color: 'green'}}>
                    </i>)
        }else{
            return  (<i onClick={() => complete(task)} 
                        className='bi-toggle-off m-3 task-action' 
                        style={{color: 'green'}}>
                    </i>)
        }
    }
    const taskCompleted = {
        textDecoration: 'line-through',
        color: 'gray',
        fontWeight:'bold'
    }
    const taskPending = {
        fontWeight: 'bold',
        color: 'tomato'
    }

    return (
    // las class fontweigth
    <tr style={task.completed ? taskCompleted : taskPending}>
        <th>
            {/* span para poder aplicarle estilos */}
            <span className='ms-2'>{task.name}</span>
        </th>
        <td className='align-middle '>
            <span>{task.description}</span>
        </td>
        <td className='align-middle '>
            {/* execution of function to return badge element */}
            <span>{taskLevelBadge()}</span>
        </td>
        <td className='align-middle '>
            {/* sustituir por un icono */}
            {taskCompletedIcon()}
            {/* pasamos el prop que es una funcion del padre y le pasamos el task a la funcion */}
            <i onClick={() => remove(task)} 
                className='bi-trash task-action' 
                style={{color: 'tomato'}}>
            </i>
            {/* <span>{task.completed ? 'COMPLETED':'PENDING'}</span> */}
        </td>
    </tr>
  )
}

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    //declaramos el prop que va a realizar la accion de eliminar o cambiar el estado 
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
}

export default TaskComponent
