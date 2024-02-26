import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { ordered,restock } from './cakeSlice';

const CakeView = () => {
    let cake=useSelector((state)=>state.cake.numOfCake);
    const dispatch=useDispatch();

  return (
    <>
    <h1>{cake}</h1>
    <button onClick={()=>dispatch(ordered())}>Ordered</button>
    <button onClick={()=>dispatch(restock(Number(prompt("Enter Your Restock Value"))))}> Restock</button>
    </>
  )
}

export default CakeView