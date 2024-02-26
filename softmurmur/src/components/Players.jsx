import React,{Fragment,useRef,useState} from 'react'

const Players = (props) => {
 
    let{obj}=props
  

    let audioRef=useRef(null);
    let [play,setPlay]=useState(true);


    let audioPlay=()=>{
            
        if(play===true){
           audioRef.current.play()            
        }else{
            audioRef.current.pause()   
        }
        setPlay(!play)
 
        
     }
     
  return (
    <div>
         {
            <div className='mainDiv'>

             <div className='subDiv'>          
            <div  onClick={audioPlay} id="ic">
            {obj.icon}
            <h3>{obj.name}</h3>
            </div>
          
           
            </div>  
            <audio src={obj.sound} ref={audioRef}></audio>
            </div>

 
        }
        
    </div>
  )
}

export default Players