type ButtonProps={
    handleClick:(event:React.MouseEvent<HTMLButtonElement>)=>void
}


const Button = (props:ButtonProps) => {
  return (
    <button onClick={props.handleClick}>Click pandra</button>
  )
}

export default Button