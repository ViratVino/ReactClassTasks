import AssignBatchesContainer from "./components/assignbatches/AssignBatchesContainer"
import CardForm from "./components/emp_card/CardForm"
import Dashboard from "./dashboard"
import { createBrowserRouter,RouterProvider } from "react-router-dom"

const App = () => {
  let router=createBrowserRouter([
    {
      path:"/",
      element:<Dashboard/>,
      children:[
        {
          path:"empcard",
          element:<CardForm/>
        },
        {
          path:"assignbatch",
          element:<AssignBatchesContainer/>
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router}>

    </RouterProvider>
  )
}

export default App