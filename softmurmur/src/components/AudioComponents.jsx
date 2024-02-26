import React, { Fragment, useRef, useState } from 'react'
import Players from './Players';

const AudioComponents = ({obj}) => {
    console.log(obj);


    

   let [play,setPlay]=useState(true);
   

   





    let audioPlay=(val)=>{
       
       let audio=new Audio(val);
       console.log(audio);
       console.log(play);
       
       if(play===true){
           audio.play();

        // audioRef.current.play();
           
       }else{
            console.log("Vinoth");
            audio.pause();
       }
       setPlay(!play)

       
    }
    

    let audioPause=(val)=>{
        let audio=new Audio(val);
        audio.pause();

    }


  return (
    <div className='icon-container'>

        { obj.map((val,index)=>{
          
        return(   
            <Fragment key={index+1}>   
          

        
        <Players obj={val} play={audioPlay} pause={audioPause}></Players>
        </Fragment>  

        )})
         
        }

      
    </div>
  )
}

export default AudioComponents