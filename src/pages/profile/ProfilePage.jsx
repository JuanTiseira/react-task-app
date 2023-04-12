import React from 'react'
import {useHistory } from 'react-router-dom';

  const ProfilePage = ({user}) => {
  const history = useHistory();
  const goBack = () => {
    history.goBack();
  }
  const navigateTo = (path)=>{
      history.push(path)
  }
  return (
    <div>
        <h1>Your Profile</h1>
        <button onClick={ () => {navigateTo('/tasks')}}>
                Go To Your Tasks
        </button>
        <button onClick={goBack}>
                Go Back
        </button>
    </div>
  )
}

export default ProfilePage