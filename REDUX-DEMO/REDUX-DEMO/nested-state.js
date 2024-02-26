const redux=require('redux')
const createStore=redux.legacy_createStore
const produce=require('immer').produce

const initialState={
    name:'Navami',
    address:{
        street:'123 Main St',
        city:'LA',
        state:'NewYork'
    },
}

const STREET_UPDATED='STREET_UPDATED'

const updateStreet=(street)=>{
    return{
        type:STREET_UPDATED,
        payload:street
    }
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case STREET_UPDATED:
            // return{
            //     ...state,
            //     address:{
            //         ...state.address,
            //         street:action.payload
            //     }
            //immer help in handling immutable data structure like above to simple one like below
            return produce(state,(draft)=>{
                draft.address.street=action.payload
            })


            
            
        default:{
            return state
        }    
    }
}

const store=createStore(reducer)
console.log('Initial State',store.getState())
const unsubscribe=store.subscribe(()=>{console.log('updated State',store.getState())})
store.dispatch(updateStreet('453 NH-Lane'))
unsubscribe()