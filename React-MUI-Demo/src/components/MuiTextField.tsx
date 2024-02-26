import { Stack,TextField,InputAdornment } from "@mui/material"
import { useState } from "react"

const MuiTextField = () => {
    let [state,setState]=useState<String>("");
  return (
    <div>
        <Stack spacing={4}>
        <Stack direction={'row'} spacing ={2}>
          <TextField label="Name" variant="outlined" error={!state} value={state} onChange={(e)=>setState(e.target.value)} helperText={state?"Name Should Be In Upper Case":"Required"}/>
          <TextField label="Name" variant="filled"/>
          <TextField label="Name" variant="standard"/>
        </Stack>
        <Stack direction={'row'} spacing ={4}>
            <TextField label="small secondary" size="small" color="secondary"/>
        </Stack>
        <Stack direction={'row'} spacing ={4}>
            <TextField label="Form input" required/>
            <TextField label="Password" helperText="Do not  share a password with any one" type="password" disabled/>
            <TextField label="Read-Only" inputProps={{readOnly:true}} type="password" />
       
        </Stack>
        <Stack direction={'row'} spacing ={4}>
            <TextField label="Amount" InputProps={{startAdornment:<InputAdornment position="start">$</InputAdornment>}}></TextField>
            <TextField label="Weight" InputProps={{endAdornment:<InputAdornment position="end">kg</InputAdornment>}}></TextField>
        </Stack>
        </Stack>
    </div>
  )
}

export default MuiTextField