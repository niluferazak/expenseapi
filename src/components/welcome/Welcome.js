import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Welcome.css"

const Welcome = () => {

    const navigate= useNavigate()
  return (
    <div>
       <h1> Welcome to the Expense tracker app</h1>
     <button className='btn' type='submit'
      onClick={() => navigate('/login/signup')}>
      continue
     </button>
  
    </div>
  )
}

export default Welcome
