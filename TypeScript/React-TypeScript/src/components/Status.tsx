type StatusProps={
    // status:string
    status:"loading"|"success"|"failure"
}

const Status = (props:StatusProps) => {
    let message
    if(props.status==='loading'){
        message="Loading..."
    }else if(props.status==="success"){
        message="Data Fetched Successfully"
    }else{
        message="Error da mairu"
    }
  return (
    <div>Status:{message}</div>
  )
}

export default Status