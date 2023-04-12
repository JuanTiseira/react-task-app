import React, { useRef } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';

//se crea un esquema de tipo objeto y se especifica la forma
const TaskFormik = ({add, length}) => {

    const nameRef = useRef('');
    const descriptionRef = useRef('');
    const levelRef = useRef(LEVELS.NORMAL);
    // const submit = (values) => {
    //     alert('Register user')
    // }
    function addTask(values){
        const newTask = new Task
        (
          values.name,
          values.description,
          false,
          values.priority
          );
          add(newTask);
      }
    const initialValues = {
        name: '',
        description: '',
        priority: LEVELS.NORMAL,

    }
    const RegisterSchema = Yup.object().shape(
        {
            name: Yup.string()
                .min(6, 'Name too short')
                .max(12, 'Name too long')
                .required('Name is required'),
            description: Yup.string()
                .min(10,'Description too short')
                .required('Email is required'),
            priority: Yup.string()
                .oneOf([LEVELS.NORMAL, LEVELS.URGENT, LEVELS.BLOCKING], 'you must select a Role:user/admin')
                .required('Role is required')   
        }
    );
    return (
        <div>
            <h4>Register Formik</h4>
            <Formik 
                // initial values that the form wil take
                initialValues={initialValues}
                // yup validation schema
                validationSchema={RegisterSchema}
                // on submit event {addTask}
                // onSubmit={async (values) => {
                //     await new Promise((r) => setTimeout(r, 1000));
                //     alert(JSON.stringify(values, null, 2))
                // }}
                onSubmit={(values) => addTask(values)}
                >

                    {({
                        values,
                        touched,
                        errors,
                        isSubmitting,
                        handleChange,
                        handleBlur }) => (
                            <Form>
                                <label htmlFor="name">Name</label>
                                <Field 
                                    id="name" 
                                    name="name" 
                                    placeholder="Task name"
                                    type="text"
                                />
                                {
                                   
                                    (
                                        
                                        <ErrorMessage name='name' component='div'></ErrorMessage>
                                        
                                    )
                                }
                                <label htmlFor="description">Description</label>
                                <Field 
                                    id="description" 
                                    name="description" 
                                    placeholder="Task description"
                                    type="text"

                                />
                                {
                                    (
                                        
                                        <ErrorMessage name='description' component='div'></ErrorMessage>
                                        
                                    )
                                }
                                
                                <label htmlFor="priority">Priority</label>
                                <Field id='priority' name='priority' as="select">
                                    <option value={LEVELS.NORMAL}>Normal</option>
                                    <option value={LEVELS.URGENT}>Urgent</option>   
                                    <option value={LEVELS.BLOCKING}>Blocking</option>
                                </Field>
                                {
                                    touched.priority && 
                                    (
                                        
                                        <ErrorMessage name='priority' component='div'></ErrorMessage>
                                        
                                    )
                                }

                                <button type="submit">Register Task</button>
                                {isSubmitting ? (<p>Sending your task data...</p>):null}
                            </Form>
                        )
                    
                }      
            </Formik>
        </div>
    )
}
TaskFormik.propTypes = {
    add: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired,
  
  }
export default TaskFormik