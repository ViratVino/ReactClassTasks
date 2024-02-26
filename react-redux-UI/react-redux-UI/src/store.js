import { configureStore } from "@reduxjs/toolkit"
import tasksReducer from "./Slices/taskSlice.js"



export const store=configureStore({
    reducer:{
     tasks:tasksReducer
    }
})