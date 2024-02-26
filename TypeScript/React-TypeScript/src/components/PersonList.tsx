// type personListProps={
//     names:{
//         first:string
//         last:string
//     }[]
// }

import { Name } from "./Person.type"

type personListProps={
  names:Name[]
}



const PersonList = (prop:personListProps) => {
  return (
    <div>
      {prop.names.map((val,i)=>{
        return(
            <>
            <li>{val.first}{val.last}</li>
            </>
        )
      })}
    </div>
  )
}

export default PersonList