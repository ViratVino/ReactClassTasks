import { configureStore } from "@reduxjs/toolkit";
import formSliceReducer from './FormSlice';

let formStore=configureStore({
    reducer:{
        form:formSliceReducer
    }
})


export default formStore