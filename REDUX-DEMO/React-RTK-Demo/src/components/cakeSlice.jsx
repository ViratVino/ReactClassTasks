import { createSlice } from "@reduxjs/toolkit";

let initialState={
    numOfCake:10
}


let cakeSlice=createSlice({
    name:"cake",
    initialState,
    reducers:{
        ordered:(state)=>{
             state.numOfCake--;
        },
        restock:(state,action)=>{
             state.numOfCake+=action.payload
        }
    }

})

export  const cakeReducer=cakeSlice.reducer
export let {ordered,restock}=cakeSlice.actions;