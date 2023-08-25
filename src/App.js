import "./App.css";
import { Route, Routes } from "react-router-dom";

import ShowExpenses from "./components/display/ShowExpenses";
import Toggle from "./components/togggle/Toggle";
import Welcome from "./components/welcome/Welcome";
import Login from "./components/Login";
import AuthContext from "./components/context/AuthContext";
function App() {
  return (
    <AuthContext.Provider>
    <div className="App">
      <Welcome />

      <Routes>
        <Route path="/login/signup" element={<Toggle />} />
        <Route path="/login" element={<Login />}></Route>
        <Route path="/expense" element={<ShowExpenses />} />
      </Routes>
    </div>
    </AuthContext.Provider>
  );
}

export default App;
