import React from 'react'
import { useSelector } from 'react-redux'

const Todo = () => {
    let course=useSelector((state)=>state.form.course);
    let description=useSelector((state)=>state.form.description)
    console.log(course);
    console.log(description);
  return (
    <>
    <h2>Your Actions</h2>
    <div >
         
        <div className="container">           
            <h3>{course}</h3>
            <p>{description}</p>
        </div>
    </div>
    </>
  )
}

export default Todo