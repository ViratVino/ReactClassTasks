import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EmployeeDetails from './EmployeeDetails';
import "./employeeDetails.css"
const GetDetails = () => {

    let [data,setData]=useState(null);

    let id=39;

    let fetchUser=async()=>{
     let {data:{body}}=await axios.get(`http://106.51.76.167:8080/user/${id}`);
     console.log(body);
     setData(body);
    }
    
    useEffect(()=>{
        fetchUser();

    },[])

  return (
    <div>
          {
            data!==null?<EmployeeDetails val={data}/>:"Loading"
          }
    </div>
  )
}

export default GetDetails