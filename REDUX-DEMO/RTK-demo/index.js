const store=require("./app/store");
const cakeActions=require("./features/cake/cakeSlice").cakeActions
const icecreamActions=require("./features/icecream/iceCreameSlice").icecreamActions
const fetchUsers=require("./features/user/userSlice").fetchUsers
console.log('initial State',store.getState());

const unsubscribe=store.subscribe(()=>{
    console.log("updated State",store.getState());
})

store.dispatch(fetchUsers())

// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())  
// store.dispatch(cakeActions.ordered())

// store.dispatch(cakeActions.restocked(3))

// store.dispatch(icecreamActions.ordered())
// store.dispatch(icecreamActions.ordered())  
// store.dispatch(icecreamActions.ordered())
// store.dispatch(icecreamActions .restocked(3))

// unsubscribe()





 