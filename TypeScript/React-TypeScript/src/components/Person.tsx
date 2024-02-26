// type personProps={
//     name:{
//         first:"string"
//         last:"string"
//     }
// }

import { personProps } from "./Person.type"

const Person = (props:personProps) => {
  return (
    <div>{props.name.first}{props.name.last}</div>
  )
}

export default Person