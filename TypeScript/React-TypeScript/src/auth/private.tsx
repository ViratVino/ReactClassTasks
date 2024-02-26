import { Login } from "./Login";
import { ProfileProps } from "./profile";
type PrivateProps={
    isLoggedIn:boolean
    component:React.ComponentType<ProfileProps>
}

export const Private=({isLoggedIn,component:Component}:PrivateProps)=>{
    if(isLoggedIn){
        return <Component name="Vinoth"/>
    }else{
        return <Login/>
    }
}