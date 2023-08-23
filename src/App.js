
import './App.css';
import {  Route, Routes } from 'react-router-dom';

import ShowExpenses from './components/display/ShowExpenses';
import Toggle from './components/togggle/Toggle';
import Welcome from './components/welcome/Welcome';




function App() {
 
 

  
  return (
    <div className="App">

    <Welcome/>
      
     
<Routes>
  
<Route path="/login/signup" element={<Toggle/>} />
      <Route path="/expense" element={<ShowExpenses/>} />

      </Routes>

      

     
    </div>
  );
}

export default App;
