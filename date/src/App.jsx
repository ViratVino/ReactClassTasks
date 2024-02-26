import React from 'react'
import Child from './Child'

const App = () => {



let prev=[
  {Task:"Navbar",
  status:"Completed"
},{Task:"Add To Cart",
status:"Completed"
},
{Task:"Orders",
  status:"Completed"
},
{Task:"Payments",
  status:"Pending"
}
];


let today=[{Task:"Footer",
status:"Pending"
},
{Task:"WishList",
  status:"Pending"
},
{Task:"Home",
  status:"Pending"
},
{Task:"Contact Us",
  status:"Pending"
}



]


  return (
    <div><Child prev={prev}  Today={today}></Child></div>
  )
}

export default App