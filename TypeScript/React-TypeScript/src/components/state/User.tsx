import { useState } from "react";

interface AuthUser{
    name:string
    email:string
}

const User = () => {
    
    // const [user,setUser]=useState<AuthUser|null>(null);
    const [user,setUser]=useState<AuthUser>({} as AuthUser);


    let handleLogin=()=>{
      setUser({
        name:(prompt("Enter Your Name")),
     
        email:(prompt("Enter Your email"))
      })
    }
    // let handleLogOut=()=>{
    //    setUser(null);
    // }
  return (
    <div>
        <button onClick={handleLogin}>Login</button>
         {/* <button onClick={handleLogOut}>Logout</button> */}
         <h2>User name is {user.name}</h2>
      
         <h3>User email is {user?.email}</h3>

    </div>
  )
}

export default User