import React from 'react'
import { useHistory } from 'react-router-dom'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';


//se crea un esquema de tipo objeto y se especifica la forma

const loginSchema = Yup.object().shape(
    {
        email: Yup.string()
            .email('Invalid email format')
            .required('Email is required'),

        password: Yup.string()
            .required('Password is required')
    }
);



const LoginFormik = () => {
    const history = useHistory();
    const initialCredencials = {
        email: '',
        password: ''
    }
    return (
        <div>
            <h4>Login Formik</h4>
            <Formik 
                // initial values that the form wil take
                initialValues={initialCredencials}
                // yup validation schema
                validationSchema={loginSchema}
                // on submit event
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
                    //registrar los datos del logueo en el
                    await localStorage.setItem('credentials', values);
                    history.push('/profile')
                }}>

                    {({ values,
                        touched,
                        errors,
                        isSubmitting,
                        handleChange,
                        handleBlur }) => (
                            <Form>
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

                                <button type="submit">Login</button>
                                {isSubmitting ? (<p>Login your credentials...</p>):null}
                            </Form>
                        )
                    }
                    
            </Formik>
        </div>
    )
}

export default LoginFormik