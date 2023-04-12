import React from 'react'
import {useHistory} from 'react-router-dom'
export const NotFoundPage = () => {
  const history = useHistory();
  const navigateTo = (path) => {
    history.push(path);
  }
  return (
    <div>
      <h1>404-NotFoundPage</h1>
      <button onClick={() => {navigateTo('/')}}>
          Go Back To Home
      </button>
    </div>
  )
}
