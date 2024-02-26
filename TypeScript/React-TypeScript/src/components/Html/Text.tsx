import React from "react"

type TextProps={
    children:React.ReactNode
    as?:React.ElementType
}


const Text = ({children,as}:TextProps) => {
    const Component=as||'div'
  return (
    <Component>{children}</Component>
  )
}

export default Text
