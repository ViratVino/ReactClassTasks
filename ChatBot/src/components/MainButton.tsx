import {Fragment, useState } from "react"
import Answer from "./Answer";
import Response from "./Response";
import Features from "./features/Features";
import KnowMore from "./knowmore/KnowMore";


const MainButton = () => {
   
    let initalQuestions=["Purpose FireFlink","Features","Know More..."];
    let [ans,setAns]=useState<string|null>(null);
    let [res,setResp]=useState<string|React.ReactNode>("");

    let handleClick = (val: string) => {
        switch (val) {
          
          case "Purpose FireFlink": {
              setResp("FireFlink is a high-speed, automated software testing tool for Web applications, Android, iOS apps, Desktop applications and APIs.");
          return setAns(val)
          }
          case "Features": {
              setResp(<Features/>)
            return setAns(val);
          }
          case "Know More...": {
            console.log(val);
             setResp(<KnowMore/>)
            return setAns(val);
          }
          default: {
            console.log(val);
            // Handle default case if needed
            return null;
          }
            
        }
      };
  return (
    <div>
         {
            
            initalQuestions.map((val,i)=>{
                console.log(val);
                return(
                    <div>
                    <Fragment key={i}>
                        {
                         <button onClick={()=>handleClick(val)}>{val}</button>
                       }
                       
                      
                    </Fragment>
                    
                    </div>
                )
            })
       
      }
       
       {
        ans && <><Answer data={ans}></Answer><Response resp={res} func={setAns}/></>
       }
    </div>
  )
}

export default MainButton