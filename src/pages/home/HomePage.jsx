import React from 'react'
import { useLocation, useHistory } from 'react-router-dom';

const HomePage = () => {
  const location = useLocation();
    const history = useHistory();

    const navigate = (path) => {
        history.push(path)
    }

    const navigateProps = (path) => {
      history.push({
        pathname: path,
        search:'?online=true',//query params  
        state: {
          online: true
        }
      })
    }
    console.log('we are in route', location.pathname)

    const goBack = () => {
        history.goBack();
    }
    
    const goForward = () => {
        history.goForward();
    }
  return (
    <div>
        <h1>
        HomePage
        </h1>
        <h2>
            Dashboard
        </h2>
        <button onClick={() => {navigateProps('/online-state')}}>
                Go To Page with State / query params
        </button>
        <button onClick={goBack}>
                Go Back
        </button>
        <button onClick={goForward}>
                Go Forward
        </button>
        <button onClick={() => {navigate('/profile')}}>
                Go To Profile
        </button>
    </div>
  )
}

export default HomePage