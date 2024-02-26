import React from "react"

type  buttonProps={
    varient:"Primary"|"Secondary"
    children:string
} & Omit<React.ComponentProps<'button'>,'children'>

export const CustomButton=({varient,children,...rest}:buttonProps)=>{
    return <button className={`class-with-${varient}`} {...rest}>{children}</button>
}