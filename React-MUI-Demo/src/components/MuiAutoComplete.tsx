import { Stack,TextField ,Autocomplete} from "@mui/material"
import { useState } from "react"

const MuiAutoComplete = () => {
    const [value,setValue]=useState<string|null>(null);
    console.log(value);
    let skills=["Html","css","Js","Java","TypeScript","React","Mongo-DB"]
  return (
    <Stack spacing={4} width={"250px"} >
        <Autocomplete options={skills} renderInput={(parems)=><TextField {...parems} label="Skills"/>} value={value} onChange={(e:any,newVal:String|any)=>setValue(newVal)} freeSolo/>
        
    </Stack>
  )
}

export default MuiAutoComplete