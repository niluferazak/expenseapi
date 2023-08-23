import { useState } from 'react';
import Login from "../Login"
import Register from "../Register"

function Toggle (){

const[currentForm,setCurrentForm]=useState("register")

  const toggleForm = (formName)=>{
    setCurrentForm(formName)
  }



 

    return (
        <div className="App">
      


     
    {
        currentForm==="register"?<Register onFormSwitch={toggleForm}/>:<Login onFormSwitch={toggleForm}/>
   
     }

     </div>
    )
  }


  
export default Toggle;
