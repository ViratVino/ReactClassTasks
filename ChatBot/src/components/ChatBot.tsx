import { useEffect, useState } from "react"w

import MainButton from "./MainButton";

const ChatBot = () => {

    let [name,setName]=useState<string>("Vinoth");
    let [wait,setWait]=useState<boolean>(false)
  
    useEffect(()=>{
      setTimeout(()=>{
         setWait(true);
      },1500)
    },[])
   
  return (
    <div>
        <div className="request" key={1}>
          <h2>Hi {name}</h2>
          <p>How can i help you?</p>
         {wait&&<MainButton ></MainButton>}
        </div>
    </div>
  )
}

export default ChatBot