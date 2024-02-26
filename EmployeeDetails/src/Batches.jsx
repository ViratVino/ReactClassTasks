import React, { useState ,useEffect} from 'react';
import { CiFilter } from "react-icons/ci";
import Card from './Card';

const Batches = ({batchs}) => {
    let [state,setState]=useState(batchs);
    let [val,setVal]=useState("All Batches");
    let [data,setData]=useState(batchs);



    const getCurrentDate = () => {
        const currentDate = new Date();
        return currentDate.toISOString().split("T")[0];
      };
    

    // useEffect(() => {
    //     batchs.map((val, i) => {
    //       const currentDate = getCurrentDate();
    //       if (val.batchStartDate > currentDate) {
    //          setUpComing(++upComing);
    //       } else if (
    //         val.batchStartDate < currentDate &&
    //         val.batchEndDate < currentDate
    //       ) {
    //         setCompleted(++completed);
    //       } else if (
    //         val.batchStartDate < currentDate &&
    //         val.batchEndDate > currentDate
    //       ) {
    //         setOngoing(++ongoing);
    //       }
    //     });
    //   }, []);

let filterData=(status)=>{
    const currentDate = getCurrentDate();
    return(
    batchs.filter((batch,val)=>{
        
    switch(status){
       case "UpComing":{
        return (batch.batchStartDate > currentDate);
       }
       case "Completed":{
        return  (batch.batchStartDate < currentDate && batch.batchEndDate < currentDate);
       }
       case "OnGoing":{
        return (batch.batchStartDate < currentDate && batch.batchEndDate > currentDate);
       }
       default:{
           return batch;
       }
    } 
})
)    
}
let handleChange=(e)=>{
   let dat=filterData(e.target.value);
   setVal(e.target.value)
    setData(dat);
    
}



  return (
    <div>
        <div className='Header'>
        <h3 className='batchHeading'>Batches <span>({val} )</span> </h3>      
        <div className="filter">
        <select  id="DropDown" onChange={handleChange}>
            
            <option value="All Batches">All</option>
            <option value="OnGoing">OnGoing</option>
            <option value="UpComing">UpComing</option>
            <option value="Completed">Complted</option>         
           </select>
     </div>
     </div>
    
    
    <div>
      <Card data={data}/>
    </div>  
    </div>
  )
}

export default Batches