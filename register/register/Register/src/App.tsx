
import LandingPage from "./LandingPae"
import SignIn from "./sign-in/SignIn"
import SignUp from "./sign-up/SignUp"
import { createBrowserRouter,RouterProvider,Route } from "react-router-dom";

let routes=createBrowserRouter([{
  path:"/",
  element:<LandingPage/>,
 },
{
  path:"/signin",
  element:<SignIn/>
},{
  path:"/signup",
  element:<SignUp/>
}


])
const App = () => {
  
  return (
    <div>
     {/* <SignIn/>
     <SignUp/>  */}
     <RouterProvider router={routes}></RouterProvider>

    
    </div>
  )
}

export default App
