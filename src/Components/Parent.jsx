
import { useContext } from "react";
import {UseContext} from "../ContextAPI/context";

function Parent() {
 
  const {user,setUser} = useContext(UseContext);
 
  return (
    <>
        <h1>{user}</h1>
        <input type="text" onChange={(e)=>setUser(e.target.value)}/>
    </>
  );
}

export default Parent;
