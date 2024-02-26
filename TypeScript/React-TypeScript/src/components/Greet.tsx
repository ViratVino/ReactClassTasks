interface GreetProps{
    name:string|number,
    messageCount:number,
    isLoggedIn:boolean
}
const Greet = (props:GreetProps) => {
  return (
    <div>
      {
        props.isLoggedIn===true ?<h2>Welcome {props.name}! You have {props.messageCount} Unread msg is there</h2>:<h1>Firstu Login Pandraa Mairuu</h1>
      
      }
        </div>
  )
}

export default Greet