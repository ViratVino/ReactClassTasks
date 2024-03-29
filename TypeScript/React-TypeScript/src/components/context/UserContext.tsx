import { createContext, useState } from "react"

export type AuthUser={
    name:string
    email:string
}

type UserContextProp={
    children:React.ReactNode
}

type UserContextType={
    user:AuthUser|null,
    setUser:React.Dispatch<React.SetStateAction<AuthUser | null>>
}

export const UserContext=createContext<UserContextType | null>(null);


export const UserContextProvider=({children}:UserContextProp)=>{
  const [user,setUser]=useState<AuthUser | null>(null)
  return<UserContext.Provider value={{user,setUser}}>
    {children}
  </UserContext.Provider>
}
