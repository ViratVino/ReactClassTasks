import { useEffect, useRef, useState } from "react"

export const MutabeRef=()=>{
    const[timer,setTimer]=useState(0)
    const intervalRef=useRef<number|null>(null);

    const stopTimer=()=>{
        if(intervalRef.current)
        window.clearInterval(intervalRef.current)
    }

    const startTimer=()=>{
        intervalRef.current=window.setInterval(()=>{
            setTimer((timer)=>timer+1)
        },100)
    }

    useEffect(()=>{
        intervalRef.current=window.setInterval(()=>{
            setTimer((timer)=>timer+1)
        },1000)
        return()=>{
            stopTimer()
        }
    },[])

    return(
        <div>
            HookTimer-{timer}-<button onClick={()=>stopTimer()}>Stop Timer</button>
            <button onClick={startTimer}>Start Timer</button>
        </div>
    )
}