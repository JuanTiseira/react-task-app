import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ROLES } from '../../../models/roles.enum';
import { User } from '../../../models/user.class'


//se crea un esquema de tipo objeto y se especifica la forma
const RegisterFormik = () => {

    // let user = new User();
    
    const initialValues = {
        username:'',
        email: '',
        password: '',
        confirm:'',
        role: ROLES.USER
    }
    // const submit = (values) => {
    //     alert('Register user')
    // }
    const RegisterSchema = Yup.object().shape(
        {
            username: Yup.string()
                .min(6, 'Username too short')
                .max(12, 'username too long')
                .required('Username is required'),
            email: Yup.string()
                .email('Invalid email format')
                .required('Email is required'),
                password: Yup.string().min(8,'Password too short').required('Password is required'),
            role: Yup.string()
                .oneOf([ROLES.USER, ROLES.ADMIN], 'you must select a Role:user/admin')
                .required('Role is required'),
            
            confirm: Yup.string()
                .oneOf(
                        [Yup.ref('password')],
                        "Passwords must match"
                    )
                .required('you must confirm the password')

                // .when("password",{
                //     is: value => (value && value.length > 0 ? true:false),
                //     then: () => Yup.string().oneOf(
                //         [Yup.ref('password')],
                //         "Passwords must match"
                //     )
                // }).required('you must confirm the password')
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
                // on submit event
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2))
                }}>

                    {({
                        values,
                        touched,
                        errors,
                        isSubmitting,
                        handleChange,
                        handleBlur }) => (
                            <Form>
                                <label htmlFor="username">Username</label>
                                <Field 
                                    id="username" 
                                    name="username" 
                                    placeholder="username"
                                    type="text"
                                />
                                {
                                   
                                    (
                                        
                                        <ErrorMessage name='username' component='div'></ErrorMessage>
                                        
                                    )
                                }
                                <label htmlFor="email">Email</label>
                                <Field 
                                    id="email" 
                                    name="email" 
                                    placeholder="example@gmail.com"
                                    type="email"
                                />
                                {
                                    errors.email && touched.email && 
                                    (
                                        
                                        <ErrorMessage name='email' component='div'></ErrorMessage>
                                        
                                    )
                                }

                                <label htmlFor="password">Password</label>
                                <Field 
                                    id="password" 
                                    name="password" 
                                    type="password" />
                                {
                                    errors.password && touched.password && 
                                    (
                                        
                                        <ErrorMessage name='password' component='div'></ErrorMessage>
                                        
                                    )
                                }
                                <label htmlFor="confirm">Confirm</label>
                                <Field 
                                    id="confirm" 
                                    name="confirm" 
                                    type="password" />
                                {
                                    errors.confirm && touched.confirm && 
                                    (
                                        
                                        <ErrorMessage name='confirm' component='div'></ErrorMessage>
                                        
                                    )
                                }

                                <button type="submit">Register Account</button>
                                {isSubmitting ? (<p>Sending your credentials...</p>):null}
                            </Form>
                        )
                    
                }      
            </Formik>
        </div>
    )
}

export default RegisterFormik