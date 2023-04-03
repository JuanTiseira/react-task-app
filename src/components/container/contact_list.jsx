import React, {useState, useEffect} from 'react'
import { Contact } from '../../models/contact.class'
import ContactComponent  from "../pure/contact"
import  {RegisterForm}  from '../pure/forms/registerForm';

function ContactListComponent() {
    const defaultContact = new Contact('Juani', 'Tiseira', 'email', true);
    const defaultContact1 = new Contact('Juani', 'Tiseira', 'email', false);
    const defaultContact2 = new Contact('Juani', 'Tiseira', 'email', false);

    const [contacts, setContact] = useState([defaultContact, defaultContact1, defaultContact2]);
    

    useEffect(() => {
        
        console.log('task state has been modified')
        return () => {
            console.log('tasklist component is going to unmount..')
            
        }
    }, [contacts]);

    function conectedContact(contact){
        console.log("conect or disconect user", contact)
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts[index].conectado = !tempContacts[index].conectado;
        //actualizar el esatdo del componente y la iteracionnde tareas y actualiza las tareas
        setContact(tempContacts);
    }
    function removeContact(contact){
        console.log("delete this task", contact)
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts.splice(index,1);
        //actualizar el esatdo del componente y la iteracionnde tareas y actualiza las tareas
        setContact(tempContacts);
    }
    function addContact(contact){
        console.log("add this task", contact)
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts.push(contact)
        //actualizar el esatdo del componente y la iteracionnde tareas y actualiza las tareas
        setContact(tempContacts);
    }
    return (
        <div className='row'>
        <div className='col-12 container text-center'>
            {/* card */}
            <div className='card'>
                {/* card header title*/}
                <div className='card-header bg-dark' >
                    <h5 style={{color: 'white'}}>
                    Tus contactos:
                    </h5>
                </div>
                {/* card body content*/}
                <div className='card-body row justify-content-center' data-mdb-perfect-scrollbar='true' style={{position: 'relative'}}>
                    <div className='col-12 col-xl-6'>
                    <table className='table table-dark table-striped rounded'>
                        <thead>
                            <tr>
                                <th  scope='col'>Nombre</th>
                                <th  scope='col'>Apellido</th>
                                <th  scope='col'>Email</th>
                                <th  scope='col'>Conectado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* TODO ITERAR SOBRE UNA LISTA DE TAREAS 
                            para ello hacer mapeo de los datos osea de la lista
                            el key es una propiedad para darle a los datos para que se muestren
                            muchos datos distintos*/}
                            {contacts.map((contact, index) =>{
                                
                                return (

                                    <ContactComponent 
                                    key = {index}
                                    contact = { contact }
                                    conected = {conectedContact}
                                    remove = {removeContact}>
                                    
                                    </ContactComponent>
                                        
                                )
                            })}
                            
                        </tbody>
                    </table>
                    </div> 
                </div>
                <div className='row justify-content-center'>
                    <div className='col-xl-6'>
                        <RegisterForm add = {addContact}></RegisterForm>
        
                    </div>
                </div>
            </div>
        </div>
        
    </div>
        

  )
}


export default ContactListComponent