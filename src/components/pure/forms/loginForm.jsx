/**
 * componente que va a contener un formulario para autenticacion de usuarios
 */


import React, {useState} from 'react'

export const LoginForm = () => {
  
    const initialCredencials = [{
            user: '',
            password: ''
        }
    ];

    const [credencials, setCredencials] = useState(initialCredencials);
    const database = [
        {
          username: "user1",
          password: "pass1"
        },
        {
          username: "user2",
          password: "pass2"
        }
      ];
      
      const errors = {
        uname: "invalid username",
        pass: "invalid password"
      };
      
      const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();
      
        var { uname, pass } = document.forms[0];
      
        // Find user login info
        const userData = database.find((user) => user.username === uname.value);
      
        // Compare user info
        if (userData) {
          if (userData.password !== pass.value) {
            // Invalid password
            setErrorMessages({ name: "pass", message: errors.pass });
          } else {
            setIsSubmitted(true);
          }
        } else {
          // Username not found
          setErrorMessages({ name: "uname", message: errors.uname });
        }
      };
    
    return (
            <div className="form">
            <form>
            <div className="input-container">
                <label>Username </label>
                <input type="text" name="uname" required />
                {renderErrorMessage("uname")}
            </div>
            <div className="input-container">
                <label>Password </label>
                <input type="password" name="pass" required />
                {renderErrorMessage("pass")}
            </div>
            <div className="button-container">
                <input type="submit" />
            </div>
            </form>
        </div>

  )
}
