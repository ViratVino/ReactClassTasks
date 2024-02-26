type ContainerProps={
    style:React.CSSProperties
}

const Container = (props:ContainerProps) => {
  return (
    // <div style={{border:`1px solid black`,padding:'1em'}}>Vanakam Da Maplaa</div>
    <div style={props.style}>Vanakam Da Maplaa</div>

  )
}

export default Container