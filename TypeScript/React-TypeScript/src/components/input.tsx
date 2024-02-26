import React from "react"

type  InputProps={
    value:string
    handleChange:(event:React.ChangeEvent<HTMLInputElement>)=>void
}

// const Input = (props:InputProps) => {
//   return (
//     <input type="text" value={props.value} onChange={props.handleChange}/>
//   )
// }

const Input = ({value,handleChange}:InputProps) => {
  return (
    <input type="text" value={value} onChange={handleChange}/>
  )
}

export default Input;