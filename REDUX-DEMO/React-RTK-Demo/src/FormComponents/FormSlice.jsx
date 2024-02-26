import { createSlice } from "@reduxjs/toolkit";

let initialState={
    course:"",
    description:""
}

let formSlice=createSlice({
    name:"form",
    initialState,
    reducers:{
        updateCourse:(state,action)=>{
        return{
            ...state,
         course:action.payload,
        }        
        },
        updateDescription:(state,action)=>{
            return{
                ...state,
                description:action.payload,
            }
        }
    }
})



export default formSlice.reducer;
export let {updateCourse,updateDescription}=formSlice.actions;