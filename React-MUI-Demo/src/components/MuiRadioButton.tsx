import { Box,FormControl,FormLabel,FormControlLabel,RadioGroup,Radio } from "@mui/material"
import React, { useState } from "react"


const MuiRadioButton = () => {
    let [value,setValue]=useState<string>("");
    console.log(value);
    let handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setValue(e.target.value);
    }
  return (
    <Box>
        <FormControl>
            <FormLabel id="job-experience-group-label">
                Years Of Experience
            </FormLabel>
            <RadioGroup name="job-experience-group"  aria-labelledby="job-experience-group-label" onChange={handleChange}>
              <FormControlLabel control={<Radio></Radio>}  label="0-2" value="0-2"/>
              <FormControlLabel control={<Radio></Radio>}  label="3-5" value="3-5"/>
              <FormControlLabel control={<Radio></Radio>}  label="6-10" value="6-10"/>
            </RadioGroup>
        </FormControl>
    </Box>
  )
}

export default MuiRadioButton