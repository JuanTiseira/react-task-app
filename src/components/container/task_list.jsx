import React, {useState, useEffect} from 'react'
import { Task } from '../../models/task.class'
import { LEVELS } from "../../models/levels.enum"
import TaskComponent  from "../pure/task"
//imprtamos la hoja de tassk.scss
import '../../styles/task.scss';
import TaskForm from '../pure/forms/taskForm';
import TaskFormik from '../pure/forms/taskFormik';

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
        setTimeout(()=>{
            setLoading(false)
        },2000);
        return () => {
            console.log('tasklist component is going to unmount..')
            
        }
    }, [tasks]);



    // const changeCompleted = (id) => {
    //     console.log('cambiar estado de una tarea')
    // }

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
        setLoading(true)
        setTask(tempTasks);
    }
    function addTask(task){
        console.log("add this task", task)
        const tempTasks = [...tasks];
        tempTasks.push(task)
        //actualizar el esatdo del componente y la iteracionnde tareas y actualiza las tareas
        setLoading(true)
        setTask(tempTasks);
    }
    const Table = () => {
        return(
            <table className='table rounded'>
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
                                el key es una propiedad para darle a los datos 
                                para que se muestren
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
        )
    }
    let tasksTable;

    if(tasks.length > 0){
        tasksTable = <Table></Table>
    }else{
        tasksTable = 
        (<div>
            <h1>There no tasks to show</h1>
            <h4>Please create one</h4>
        </div>)
    }

    const loadingStyle = {
        color:'grey',
        fontSize:'30px',
        fontWeight:'bold'
    }
    return (
    <div className='row'>
        <div className='col-sm-12 col-xl-8 container text-center p-4'>
            {/* card */}
            <div className='card col-xl-12 col-sm-12'>
                {/* card header title*/}
                <div className='card-header bg-dark' >
                    <h5 style={{color: 'white'}}>
                    Tus tareas:
                    </h5>
                </div>
                {/* card body content*/}
                <div className='card-body row justify-content-center' 
                    data-mdb-perfect-scrollbar='true' 
                    style={{position: 'relative', alignItems:'center'}}>
                    <div className='col-sm-12 col-xl-7' style={{
                        maxWidth: '100%',
                        overflowX: 'auto'}}>
                            {/* todo add loading spinner */}
                        {loading ? (<p style={loadingStyle}>loading tasks...</p>) : tasksTable}
                    </div>
                     
                </div>
                    
            </div>

        </div>
        <div className='col-sm-12 col-xl-4 container text-center p-4'>
            <div className='card col-xl-12'>
                <div className='card-header bg-dark' >
                    <h5 style={{color: 'white'}}>
                    Registrar tarea:
                    </h5>
                </div>
                <div className='card-body row justify-content-center' 
                    data-mdb-perfect-scrollbar='true' 
                    style={{position: 'relative', alignItems:'center'}}>
                    
                    <div className='col-sm-12 col-xl-12' style={{
                        maxWidth: '100%',
                        margin: '0 auto',
                        padding: '10px',
                        boxSizing: 'border-box'
                        }}>
                        <TaskFormik add={addTask} length={tasks.length}></TaskFormik>
                        {/* <TaskForm add={addTask} length={tasks.length}></TaskForm> */}
                    </div>
                </div>    
            </div>
        </div>
    </div>
    
  )
}


export default TaskListComponent