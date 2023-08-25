// import { createContext, useState } from 'react'
// import axios from 'axios'




// const AuthContext = createContext();

// console.log( AuthContext)

//  export default AuthContext;


// const API_URL = "https://expensetracker-prod-3f73834eea1d.herokuapp.com/api/auth/"

// // const [user, setUser] = useState({
// //     loggedIn: false,
// // })


// const signup =(firstname, lastname, email,username, password) =>{
//     return axios.post (API_URL + "/users/",{
//         firstname,
//          lastname,
//           email,
//           username, 
//           password,

//     })
//     .then((response)=>{
//         if (response.data.accessToken){
//             localStorage.setItem("user", JSON.stringify(response.data))
//         }

//         return response.data;
//     })
// };
//  const login = (email, password) => {
//     return axios.post(API_URL + "/jwt/create/", {
//         email ,
//         password,
//     })
//     .then((response)=>{
//         if (response.data.accessToken){
//             localStorage.setItem("user", JSON.stringify(response.data))
//         }

//         return response.data;
//     })
// };
 




// const logout =()=>{
//     localStorage.removeItem("user")
// }


// // const AuthContext ={
    
// //     signup,
// //     login,
// //     logout, 
// // };
// // export default AuthContext;





import { useEffect } from 'react'
import { createContext, useState } from 'react'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({
        loggedIn: false,
    })

    const login = (user) => {
        setUser({
            ...user,
            loggedIn: true,
        })
        localStorage.setItem('token', user.token)
    }

    const logout = () => {
        setUser({
            loggedIn: false,
        })
        localStorage.removeItem('token')
    }
    return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>
}

export default AuthContext
