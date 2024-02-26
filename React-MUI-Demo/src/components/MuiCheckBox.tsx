
// import { BookmarkIcon,BookmarkBorderIcon } from '@mui/icons-material';
import {Box, FormControlLabel,Checkbox } from '@mui/material';
import React, { useState } from 'react';

const MuiCheckBox = () => {
    let [change,setChange]=useState<boolean>(false);
    console.log(change);
    let handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        if(e.target.checked){
            setChange(true);
        }else{
            setChange(false);
        }
    }
  return (
    <Box>
        <Box>
            <FormControlLabel label="I accept Terms And Condition" control={<Checkbox onChange={handleChange} color='secondary'/>} />
        </Box>
        <Box>
            <Checkbox icon={<BookmarkBorderIcon/>} checkedIcon={<BookmarkIcon/>}/>
    

        </Box>
    </Box>
  )
}

export default MuiCheckBox