// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import "bootstrap-icons/font/bootstrap-icons.css";  
// import { Provider } from 'react-redux';
// import { store } from './store';

import { bindActionCreators, combineReducers, createStore } from "@reduxjs/toolkit"



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//    <Provider store={store}>
//     <App />
//     </Provider>
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();



const CAKE_ORDERED="CAKE_ORDERED";
const CAKE_RESTORE="CAKE_RESTORE";
const ICECREAM_ORDERED="ICECREAM_ORDERED";
const ICECREAM_RESTORE="ICECREAM_RESTORE";

//action function
function orderCake(){
 return {
  type:CAKE_ORDERED,
  payload : 1
}
}

function orderIceCream(){
  return {
   type:ICECREAM_ORDERED,
   payload : 1
 }
 }

function restock(qty){
  return{
    type:CAKE_RESTORE,
    payload:qty

  }
}
function restockIceCream(qty){
  return{
    type:ICECREAM_RESTORE,
    payload:qty

  }
}

//initial store
const cakeInitalState={
  numOfCakes:10
}

const iceInitalState={
  numOfIceCreams:10
}


//reducer Function (state)
const Cakereducer=(state=cakeInitalState,action)=>{
  switch(action.type){
    case CAKE_ORDERED:{
      return{
        numOfCakes:state.numOfCakes-1
            }
    }
    case CAKE_RESTORE:{
      return{
        numOfCakes:action.payload
            }
    }
    default:{
      return state
    }
  }
}


const Icereducer=(state=iceInitalState,action)=>{
  switch(action.type){
    case ICECREAM_ORDERED:{
      return{
        numOfIceCreams:action.payload
            }
    }
    case ICECREAM_RESTORE:{
      return{
        numOfIceCreams:action.payload
            }
    }
    default:{
      return state
    }
  }
}





let reducer=combineReducers({
  Cake:Cakereducer,
  IceCreame:Icereducer
})

const store=createStore(reducer);
console.log(store,"InitialState",store.getState());
const unSubScribe=store.subscribe(()=>console.log("updated State",store.getState()));

// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(restock(10))

const actions=bindActionCreators({orderCake,restock,orderIceCream,restockIceCream},store.dispatch);
actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.restock(10 );
actions.orderIceCream();
actions.restockIceCream(20);


unSubScribe();


