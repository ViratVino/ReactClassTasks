import React, { useState } from 'react'
import { GiInsectJaws } from "react-icons/gi";
import { MdOutlineThunderstorm } from "react-icons/md";
import { IoRainyOutline } from "react-icons/io5";
import { MdWaves } from "react-icons/md";
import { MdWindPower } from "react-icons/md";
import "./App.css"
import AudioComponents from './components/AudioComponents';
import Navbar from './components/Navbar';

const App = () => {


    let [state,setState]=useState(true);

    let obj=[{
        name:"Thunder",
        sound:"https://st2.asoftmurmur.com/assets/p/content/thunder/main-thunder.mp4",
        icon:<MdOutlineThunderstorm  className='icon'/>
        
    },
    {
        name:"Cricket",
        sound:"https://st3.asoftmurmur.com/assets/p/content/crickets/main-crickets.mp4",
        icon:<GiInsectJaws className='icon' />
       
    },
    {
        name:"Waves",
        sound:"https://st3.asoftmurmur.com/assets/p/content/waves/glue-waves.mp4",
        icon:<MdWaves className='icon' />
    },
    {
        name:"Rain",
        sound:"https://st2.asoftmurmur.com/assets/p/content/rain/main-rain.mp4",
        icon:<IoRainyOutline className='icon' />
    },
    {
        name:"Wind",
        sound:"https://st2.asoftmurmur.com/assets/p/content/wind/main-wind.mp4",
        icon:<MdWindPower  className='icon'/>
    }
]


let update=(val)=>{
     setState(val);
   
}




  return (

    <div>
        {state?<Navbar update={update}></Navbar>:
    <div className='sup'>
          <div className='HEADER'>MY SOUND APPLICATION </div>
      <AudioComponents obj={obj} ></AudioComponents>
    </div>
     }
    </div>
  
  )
}

export default App