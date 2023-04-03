import React, {useState, useEffect} from 'react'
import { Task } from '../../models/task.class'
import { LEVELS } from "../../models/levels.enum"
import TaskComponent  from "../pure/task"
//imprtamos la hoja de tassk.scss
import '../../styles/task.scss';
import TaskForm from '../pure/forms/taskForm';

function TaskListComponent() {
    //tarea por defecto instancia de clase task
    const defaultTask = new Task('ejemplo', 'descripcion1', true, LEVELS.NORMAL);
    const defaultTask1 = new Task('ejemplo1', 'descripcion1', true, LEVELS.URGENT);
    const defaultTask2 = new Task('ejemplo2', 'descripcion2', false, LEVELS.BLOCKING);
    
    //definimos un estado inicial con useState
    const [tasks, setTask] = useState([defaultTask, defaultTask1, defaultTask2]);
    //estado para controlar la carga de las tareas
    const [loading, setLoading] = useState(true);
    
    //control del ciclo de vida del componente
    
    useEffect(() => {
        
        console.log('task state has been modified')
        setLoading(false)
        return () => {
            console.log('tasklist component is going to unmount..')
            
        }
    }, [tasks]);



    const changeCompleted = (id) => {
        console.log('cambiar estado de una tarea')
    }

    function completeTask(task){
        console.log("complete this task", task)
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks[index].completed = !tempTasks[index].completed;
        //actualizar el esatdo del componente y la iteracionnde tareas y actualiza las tareas
        setTask(tempTasks);
    }

    function removeTask(task){
        console.log("delete this task", task)
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks.splice(index,1);
        //actualizar el esatdo del componente y la iteracionnde tareas y actualiza las tareas
        setTask(tempTasks);
    }
    function addTask(task){
        console.log("add this task", task)
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks.push(task)
        //actualizar el esatdo del componente y la iteracionnde tareas y actualiza las tareas
        setTask(tempTasks);
    }
    return (
    <div className='row'>
        <div className='col-12 container text-center'>
            {/* card */}
            <div className='card'>
                {/* card header title*/}
                <div className='card-header bg-dark' >
                    <h5 style={{color: 'white'}}>
                    Tus tareas:
                    </h5>
                </div>
                {/* card body content*/}
                <div className='card-body row justify-content-center' data-mdb-perfect-scrollbar='true' style={{position: 'relative'}}>
                    <div className='col-12 col-xl-6'>
                    <table className='table table-dark table-striped rounded'>
                        <thead>
                            <tr>
                                <th  scope='col'>Title</th>
                                <th  scope='col'>Description</th>
                                <th  scope='col'>Priority</th>
                                <th  scope='col'>Completed</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* TODO ITERAR SOBRE UNA LISTA DE TAREAS 
                            para ello hacer mapeo de los datos osea de la lista
                            el key es una propiedad para darle a los datos para que se muestren
                            muchos datos distintos*/}
                            {tasks.map((task, index) =>{
                                
                                return (

                                    <TaskComponent 
                                        key = {index} 
                                        task = { task }
                                        complete = {completeTask}
                                        remove = {removeTask}>
                                        
                                    </TaskComponent>
                                )
                            })}
                            
                        </tbody>
                    </table>
                    </div> 
                </div>
                <div className='row justify-content-center'>
                    <div className='col-xl-6'>
                        <TaskForm add={addTask}></TaskForm>
        
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    
  )
}


export default TaskListComponent