import { useState } from "react"
const Loggedin = () => {

    const [loggin,setLoggin]=useState(false);

    let handleLogin=()=>{
        setLoggin(true);
    }
    let handleLogOut=()=>{
        setLoggin(false);
    }
  return (
    <div>
         <button onClick={handleLogin}>Login</button>
         <button onClick={handleLogOut}>Logout</button>
         <h2>User is {loggin?"Logged In":"Logged Out"}</h2>
    </div>
  )
}

export default Loggedin