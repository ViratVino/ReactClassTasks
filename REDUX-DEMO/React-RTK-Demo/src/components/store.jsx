import { configureStore } from "@reduxjs/toolkit";
import { cakeReducer } from "./cakeSlice";
console.log(cakeReducer);


export const store=configureStore({
   reducer:{
    cake:cakeReducer
   }
 })