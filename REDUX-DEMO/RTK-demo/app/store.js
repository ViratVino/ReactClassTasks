const configureStore=require('@reduxjs/toolkit').configureStore
const cakeReducer=require("../features/cake/cakeSlice")
const icecreamReducer=require("../features/icecream/iceCreameSlice")
const reduxLogger=require("redux-logger")
const logger=reduxLogger.createLogger()
const userReducer=require("../features/user/userSlice")

const store=configureStore({
    reducer:{
        cake:cakeReducer,
        icecream:icecreamReducer,
        user:userReducer
    },
    // middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger), 
})

module.exports=store



