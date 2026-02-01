import React,{useState} from 'react'
import UseContext from './context'
const UserContextProvider = ({children}) => {
    const [user,setUser] = useState("Vishal");
  return (
    <UseContext.Provider value={{user,setUser}}>
       {children}
    </UseContext.Provider>
  )
}

export default UserContextProvider