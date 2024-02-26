import React from 'react';
import { CiMenuBurger } from "react-icons/ci";

const Navbar = ({update}) => {
   


    const changeState= () =>{

       update(false);
    }
  return (

    
    <div className='navMain' >
      <CiMenuBurger  className='menu'/>
      <div className='utility'>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Get Updates</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#" onClick={changeState}>View</a></li>
    </div>
      
    </div>
    
  )
}

export default Navbar




