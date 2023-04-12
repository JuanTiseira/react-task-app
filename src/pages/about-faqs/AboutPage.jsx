import React from 'react'
import { useLocation, useHistory } from 'react-router-dom';


const AboutPage = () => {
  
    const location = useLocation();
    const history = useHistory();

    const navigate = (path) => {
        history.push(path)
    }

    console.log('we are in route', location.pathname)


    return (
    <div>
        <h1>
            About | FAQs Page
        </h1>
        <div>
            <button onClick={() => {navigate('/profile')}}>
                Go To Profile
            </button>
        </div>
    </div>
  )
}

export default AboutPage