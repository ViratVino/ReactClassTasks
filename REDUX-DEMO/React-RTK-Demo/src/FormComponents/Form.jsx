import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { updateCourse ,updateDescription} from './FormSlice';


const Form = () => {

    // let [course,setCourse]=useState("");
    // let [desc,setDesc]=useState("")

    let dispatch=useDispatch();

    let [val,setVal]=useState({
        course:"",
        description:""
    })

    let {course,description}=val;


    let handleChange=e=>{
        let {name,value}=e.target;
        setVal({
            ...val,
            [name]:value
        })
    }

    let updateValues=()=>{
        dispatch(updateCourse(course));
        dispatch(updateDescription(description));
    }

  return (
    <div className='form'>
        <label htmlFor="">Enter Your Course</label>
        <input type="text" name='course' value={course} onChange={handleChange}/>
        <label htmlFor="">Description</label>
         <textarea name="description" id="" cols="30" rows="10" value={description} onChange={handleChange}></textarea>
         <button onClick={updateValues}>Submit</button>
    </div>
  )
}

export default Form