import { useContext } from "react"
import { UserContext } from "./UserContext"




const User = () => {
   
const userContext=useContext(UserContext);

    let handleLogin=()=>{
       userContext?.setUser({
        name:prompt("Enter Your Name"),
        email:prompt("enter Your Email")
       })
    }
    let handleLogOut=()=>{
      userContext?.setUser(null);
    }
  return (
    <div>
        <button onClick={handleLogin}>Login</button>
         <button onClick={handleLogOut}>Logout</button>
         <h2>User name is {userContext?.user?.name} </h2>
         <h3>User email is {userContext?.user?.email} </h3>
       
      
         
    </div>
  )
}

export default User