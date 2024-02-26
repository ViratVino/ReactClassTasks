// const redux=require("redux");
// const { default: axios } = require("axios");
// const { createStore } = require("redux")
// const {applyMiddleware}=require("redux")
// const thunkMiddleware=require('redux-thunk').thunk

// const initialState={
//     loading:false,
//     users:[],
//     error:''
// }


// const FETCH_USERS_REQUESTED="FETCH_USERS_REQUESTED"
// const FETCH_USERS_SUCCEEDED="FETCH_USERS_SUCCEEDED"
// const FETCH_USERS_FAILED="FETCH_USERS_FAILED"


// const fetchUsersrequest=()=>{
//     return{
//         type:FETCH_USERS_REQUESTED,
//     }
// }

// const fetchUserSuccess=(users)=>{
//     return{
//         type:FETCH_USERS_SUCCEEDED,
//         payload:users
//     }
// }

// const fetchUsersFailure=(err)=>{
//     return{
//         type:FETCH_USERS_FAILED,
//         payload:err
//     }
// }


// const reducer=(state=initialState,action)=>{
//     switch(action.type){
//         case FETCH_USERS_REQUESTED:{
//             return{
//                 ...state,loading:true
//             }
//         }
//         case FETCH_USERS_SUCCEEDED:{
//             return{
//                loading:false,
//                users:action.payload,
//                error:''
//             }
//         }
//         case FETCH_USERS_FAILED:{
//             return{
//                loading:false,
//                users:[],
//                error:action.payload,
//             }
//         }
//     }

// }


// let store=createStore(reducer,applyMiddleware(thunkMiddleware));


// const fetchUsers=async()=>{
   
//     return async function(dispatch){
//         dispatch(fetchUsersrequest())
//         try{
//        let {data}=await axios.get("https://jsonplaceholder.typicode.com/users");
//        console.log(data);
//        const users=data.map((users)=>users.id);
//        dispatch(fetchUserSuccess(users))
//         }catch(error){
//             dispatch(fetchUsersFailure(error.message))
//         }
//     }
// }

// store.subscribe(()=>console.log(store.getState()))
// store.dispatch(fetchUsers());



const redux = require("redux");
const axios = require("axios");
const thunkMiddleware = require('redux-thunk').thunk; // Use .default to get the default export of redux-thunk
const { createStore, applyMiddleware } = redux;

const initialState = {
    loading: false,
    users: [],
    error: ''
};

const FETCH_USERS_REQUESTED = "FETCH_USERS_REQUESTED";
const FETCH_USERS_SUCCEEDED = "FETCH_USERS_SUCCEEDED";
const FETCH_USERS_FAILED = "FETCH_USERS_FAILED";

const fetchUsersRequest = () => ({
    type: FETCH_USERS_REQUESTED,
});

const fetchUserSuccess = (users) => ({
    type: FETCH_USERS_SUCCEEDED,
    payload: users,
});

const fetchUsersFailure = (err) => ({
    type: FETCH_USERS_FAILED,
    payload: err,
});

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUESTED:
            return {
                ...state,
                loading: true,
            };
        case FETCH_USERS_SUCCEEDED:
            return {
                loading: false,
                users: action.payload,
                error: '',
            };
        case FETCH_USERS_FAILED:
            return {
                loading: false,
                users: [],
                error: action.payload,
            };
        default:
            return state;
    }
};

// Apply redux-thunk middleware when creating the store
const store = createStore(reducer, applyMiddleware(thunkMiddleware));

// Action creator using thunk
const fetchUsers = () => {
    return async function (dispatch) {
        dispatch(fetchUsersRequest());
        try {
            let { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
            console.log(data);
            const users = data.map((user) => user.id);
            dispatch(fetchUserSuccess(users));
        } catch (error) {
            dispatch(fetchUsersFailure(error.message));
        }
    };
};

store.subscribe(() => console.log(store.getState()));
store.dispatch(fetchUsers());
